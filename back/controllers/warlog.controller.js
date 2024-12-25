import { Clan, WarLog } from "../data/mongodb.js";

// Create a new War Log
export const createWarLog = async (req, res) => {
  const {
    clanId,
    warDate,
    opponentClan,
    result,
    stars,
    destructionPercentage,
  } = req.body;

  try {
    // Check if the Clan exists
    const clan = await Clan.findById(clanId);
    if (!clan) {
      return res.status(404).json({ message: "Clan not found" });
    }

    // Create a new War Log
    const newWarLog = await WarLog.create({
      clanId,
      warDate,
      opponentClan,
      result,
      stars,
      destructionPercentage,
    });

    res
      .status(201)
      .json({ message: "War Log created successfully", data: newWarLog });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating War Log", error: error.message });
  }
};

// Get all War Logs for a specific Clan
export const getWarLogsByClan = async (req, res) => {
  const { clanId } = req.params;

  try {
    const warLogs = await WarLog.find({ clanId }).sort({ warDate: -1 }); // Sort by most recent first
    res
      .status(200)
      .json({ message: "War Logs retrieved successfully", warLogs });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving War Logs", error: error.message });
  }
};

// Get a single War Log by ID
export const getWarLogById = async (req, res) => {
  const { id } = req.params;

  try {
    const warLog = await WarLog.findById(id);
    if (!warLog) {
      return res.status(404).json({ message: "War Log not found" });
    }
    res
      .status(200)
      .json({ message: "War Log retrieved successfully", data: warLog });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving War Log", error: error.message });
  }
};

// Update a War Log
export const updateWarLog = async (req, res) => {
  const { id } = req.params;
  const { warDate, opponentClan, result, stars, destructionPercentage } =
    req.body;

  try {
    const updatedWarLog = await WarLog.findByIdAndUpdate(
      id,
      { warDate, opponentClan, result, stars, destructionPercentage },
      { new: true } // Return the updated document
    );

    if (!updatedWarLog) {
      return res.status(404).json({ message: "War Log not found" });
    }

    res
      .status(200)
      .json({ message: "War Log updated successfully", data: updatedWarLog });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating War Log", error: error.message });
  }
};

// Delete a War Log
export const deleteWarLog = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedWarLog = await WarLog.findByIdAndDelete(id);

    if (!deletedWarLog) {
      return res.status(404).json({ message: "War Log not found" });
    }

    res.status(200).json({ message: "War Log deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting War Log", error: error.message });
  }
};
