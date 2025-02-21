import { Contest, Clan } from "../data/mongodb.js";
import mongoose from "mongoose"; 
// Controller function to create a new match
export const createContest = async (req, res) => {
  try {
    const {
      name,
      date,
      message,
      noOfIssues,
      note,
      contestPrice,
      participents,
      rules,
      adminId,
    } = req.body;

    // Check for required fields
    if (!name || !date || !contestPrice) {
      return res
        .status(400)
        .json({ error: "Name, date, and contestPrice are required." });
    }

    // Create a new contest
    const newContest = new Contest({
      name,
      date,
      message,
      noOfIssues,
      note,
      contestPrice,
      participents: participents || [],
      rules,
      adminId,
    });

    // Save to the database
    await newContest.save();

    res
      .status(201)
      .json({ message: "Contest created successfully!", contest: newContest });
  } catch (error) {
    res.status(500).json({ error: "Server Error", details: error.message });
  }
};
// Controller function to get all matches
export const getAllContests = async (req, res) => {
  try {
    const contest = await Contest.find();
    res.status(200).json(contest);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to retrieve matches.", error: error.message });
  }
};

// Controller function to get a match by ID
export const getContestById = async (req, res) => {
  try {
    const { id } = req.params;
    const contest = await Contest.findById(id);
    if (!contest) {
      return res.status(404).json({ message: "Match not found." });
    }
    res.status(200).json(contest);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to retrieve match.", error: error.message });
  }
};

// Controller function to update only the participents array
export const updateContest = async (req, res) => {
  try {
    const { id } = req.params;
    const { clanId } = req.body;

    if (!clanId) {
      return res.status(400).json({ message: "Clan ID is required." });
    }

    const contest = await Contest.findByIdAndUpdate(
      id,
      { $addToSet: { participents:  new mongoose.Types.ObjectId(clanId)  } }, // Add clanId to participents array (prevents duplicates)
      { new: true }
    );

    if (!contest) {
      return res.status(404).json({ message: "Contest not found." });
    }
    // Add contest ID to the contests array of the clan
    const clan = await Clan.findByIdAndUpdate(
      clanId,
      { $addToSet: { contests: contest._id } }, // Prevents duplicates
      { new: true }
    );

    if (!clan) {
      return res.status(404).json({ message: "Clan not found." });
    }

    res
      .status(200)
      .json({ message: "Participant added successfully!", contest });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update contest.", error: error.message });
  }
};

// Controller function to delete a match by ID
export const deleteContest = async (req, res) => {
  try {
    const { id } = req.params;
    const contest = await Contest.findByIdAndDelete(id);
    if (!contest) {
      return res.status(404).json({ message: "Match not found." });
    }
    res.status(200).json({ message: "Match deleted successfully!" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete match.", error: error.message });
  }
};

// Get all contests where a given clanId is in the participents array
export const getContestsByClanId = async (req, res) => {
  try {
    const { clanId } = req.params;

    if (!clanId) {
      return res.status(400).json({ message: "clanId is required" });
    }

    const contests = await Contest.find({
      participents: new mongoose.Types.ObjectId(clanId),
    });

    res.status(200).json(contests);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Get all contests for a specific adminId
export const getContestsByAdminId = async (req, res) => {
  try {
    const { adminId } = req.params;

    if (!adminId) {
      return res.status(400).json({ message: "adminId is required" });
    }

    const contests = await Contest.find({ adminId });

    res.status(200).json(contests);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
