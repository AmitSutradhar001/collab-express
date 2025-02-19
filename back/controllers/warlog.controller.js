import { Clan, WarLog } from "../data/mongodb.js";

// Create a new War Log
import mongoose from "mongoose";

export const createWarLog = async (req, res) => {
  const { clanId, warDate } = req.body;

  try {
    // Ensure clanId is always treated as an ObjectId
    const clanObjectId = new mongoose.Types.ObjectId(clanId);

    // Check if the Clan exists
    const clan = await Clan.findById(clanObjectId);
    if (!clan) {
      return res.status(404).json({ message: "Clan not found" });
    }

    // Fetch a random clan that is NOT the given clan
    const opponentClan = await Clan.aggregate([
      { $match: { _id: { $ne: clan._id } } }, // Exclude the current clan
      { $sample: { size: 1 } }, // Get one random clan
    ]);

    if (!opponentClan.length) {
      return res.status(404).json({ message: "No opponent clan found" });
    }

    // Assign opponent clan data
    const opponentClanData = opponentClan[0];

    // Create a new War Log for both Clans
    const clanAWarLog = await WarLog.create({
      clanId: clan._id, // Keep as ObjectId
      warDate,
      opponentClanName: opponentClanData.name,
      opponentClanId: opponentClanData._id, // Keep as ObjectId
      opponentClanProfileImage: opponentClanData.profileImage,
    });

    const clanBWarLog = await WarLog.create({
      clanId: opponentClanData._id, // Keep as ObjectId
      warDate,
      opponentClanName: clan.name,
      opponentClanId: clan._id, // Keep as ObjectId
      opponentClanProfileImage: clan.profileImage,
    });

    res
      .status(201)
      .json({ message: "War Log created successfully", clanAWarLog });
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

export const updateWarLog = async (req, res) => {
  const { id } = req.params;
  const {
    isLive,
    result,
    stars,
    opponentDestructionPercentage,
    clanDestructionPercentage,
  } = req.body;

  try {
    // Step 1: Find the first war log (Clan A's war log)
    const warLogA = await WarLog.findById(id);
    if (!warLogA) {
      return res.status(404).json({ message: "War Log not found" });
    }

    // Step 2: Find the corresponding war log for the opponent (Clan B's war log)
    const warLogB = await WarLog.findOne({
      clanId: warLogA.opponentClanId, // Opponent's war log should have this clan
      opponentClanId: warLogA.clanId, // And should reference the original clan
    });

    if (!warLogB) {
      return res.status(404).json({ message: "Opponent's War Log not found" });
    }

    // Step 3: Determine the opponent's result
    const opponentResult =
      result === "Win" ? "Lose" : result === "Lose" ? "Win" : "Draw";

    // Step 4: Update War Log for Clan A
    const updatedWarLogA = await WarLog.findByIdAndUpdate(
      warLogA._id,
      {
        isLive,
        result,
        stars,
        clanDestructionPercentage,
        opponentDestructionPercentage,
      },
      { new: true }
    );

    // Step 5: Update War Log for Clan B
    const updatedWarLogB = await WarLog.findByIdAndUpdate(
      warLogB._id,
      {
        isLive,
        result: opponentResult, // Flip the result for the opponent
        stars,
        clanDestructionPercentage: opponentDestructionPercentage, // Swap destruction %
        opponentDestructionPercentage: clanDestructionPercentage,
      },
      { new: true }
    );

    // Step 6: Update Clan A's war statistics
    const clanA = await Clan.findById(warLogA.clanId);
    if (clanA) {
      if (result === "Win") {
        clanA.warWins += 1;
      } else if (result === "Lose") {
        clanA.warLosses += 1;
      } else if (result === "Draw") {
        clanA.warTies += 1;
      }
      await clanA.save();
    }

    // Step 7: Update Clan B's war statistics
    const clanB = await Clan.findById(warLogA.opponentClanId);
    if (clanB) {
      if (result === "Win") {
        clanB.warLosses += 1; // If Clan A wins, Clan B loses
      } else if (result === "Lose") {
        clanB.warWins += 1; // If Clan A loses, Clan B wins
      } else if (result === "Draw") {
        clanB.warTies += 1;
      }
      await clanB.save();
    }

    res.status(200).json({
      message: "Both War Logs and Clan statistics updated successfully",
      data: { updatedWarLogA, updatedWarLogB, clanA, clanB },
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating War Logs and Clan statistics",
      error: error.message,
    });
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
