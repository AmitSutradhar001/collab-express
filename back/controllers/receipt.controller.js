import { Receipt } from "../data/mongodb.js";

// Create a new receipt
export const createReceipt = async (req, res) => {
  try {
    const {
      userId,
      clanId,
      clanName,
      userName,
      pointSpend,
      itemPerchesed,
      date,
    } = req.body;

    const newReceipt = new Receipt({
      userId,
      clanId,
      clanName,
      userName,
      pointSpend,
      itemPerchesed,
      date,
    });

    const savedReceipt = await newReceipt.save();
    res.status(201).json(savedReceipt);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all receipts
export const getAllReceipt = async (req, res) => {
  try {
    const receipts = await Receipt.find();
    res.status(200).json(receipts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a receipt by ID
export const getReceiptById = async (req, res) => {
  try {
    const { id } = req.params;
    const receipt = await Receipt.findById(id);

    if (!receipt) {
      return res.status(404).json({ message: "Receipt not found" });
    }

    res.status(200).json(receipt);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a receipt by ID
export const updateReceipt = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      userId,
      clanId,
      clanName,
      userName,
      pointSpend,
      itemPerchesed,
      date,
    } = req.body;

    const updatedReceipt = await Receipt.findByIdAndUpdate(
      id,
      { userId, clanId, clanName, userName, pointSpend, itemPerchesed, date },
      { new: true, runValidators: true }
    );

    if (!updatedReceipt) {
      return res.status(404).json({ message: "Receipt not found" });
    }

    res.status(200).json(updatedReceipt);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a receipt by ID
export const deleteReceipt = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedReceipt = await Receipt.findByIdAndDelete(id);

    if (!deletedReceipt) {
      return res.status(404).json({ message: "Receipt not found" });
    }

    res.status(200).json({ message: "Receipt deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
