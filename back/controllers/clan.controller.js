// Import dependencies
import mongoose from "mongoose";
import { User, ClanPoints, Clan } from "../data/mongodb.js";
// Create a clan

export const createClan = async (req, res) => {
  try {
    const newClan = new Clan(req.body);
    // Save the new post to the database
    const savedClan = await newClan.save();

    if (!savedClan) {
      return next({
        status: 400,
        message: "Clan is not found.",
      });
    }

    const user = await User.findByIdAndUpdate(
      req.user._id,
      { $set: { clanId: savedClan._id } },
      { new: true } // Ensures updated user is returned
    );

    const points = new ClanPoints({
      clanName: savedClan.name,
      points: 0,
      clanId: savedClan._id,
    });
    const savePoints = await points.save();
    if (!savePoints) {
      return next({
        status: 400,
        message: "Points is not created!.",
      });
    }

    if (!user) {
      return next({
        status: 404,
        message: "User not found.",
      });
    }
    res.status(201).json({ success: true, clan: savedClan, user });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Get all clans
export const getAllClans = async (req, res) => {
  try {
    const clans = await Clan.find();
    res.status(200).json({ success: true, data: clans });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get a single clan by ID
export const getClanById = async (req, res) => {
  try {
    const { id } = req.params;
    const clan = await Clan.findById(id);

    if (!clan) {
      return res
        .status(404)
        .json({ success: false, message: "Clan not found" });
    }

    res.status(200).json({ success: true, clan });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Update a clan by ID
export const updateClan = async (req, res) => {
  try {
    const { id } = req.params;
    const clan = await Clan.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!clan) {
      return res
        .status(404)
        .json({ success: false, message: "Clan not found" });
    }

    res.status(200).json({ success: true, clan });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Delete a clan by ID
export const deleteClan = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the clan before deleting
    const clan = await Clan.findById(id);

    if (!clan) {
      return res
        .status(404)
        .json({ success: false, message: "Clan not found" });
    }

    // Remove clanId for all users in the members array
    await User.updateMany(
      { _id: { $in: clan.members } }, // Find all users in the members array
      { $set: { clanId: null } } // Set their clanId to null
    );

    // Delete the clan
    await Clan.findByIdAndDelete(id);

    res
      .status(200)
      .json({ success: true, message: "Clan deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const joinClan = async (req, res) => {
  const { userId, clanId } = req.body;

  try {

    // Update user's clanId
    const user = await User.findByIdAndUpdate(
      userId,
      { clanId: new mongoose.Types.ObjectId(clanId) },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Add user to clan's members array
    const clan = await Clan.findByIdAndUpdate(
      clanId,
      { $addToSet: { members: userId } }, // Prevents duplicates
      { new: true }
    );

    if (!clan) {
      return res.status(404).json({ message: "Clan not found" });
    }

    res.status(200).json({ message: "Joined clan successfully", user, clan });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const leaveClan = async (req, res) => {
  const { userId, clanId } = req.body;

  try {
    // Find and update the user, setting clanId to null
    const user = await User.findByIdAndUpdate(
      userId,
      { clanId: null }, // Remove user's clan association
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Find and update the clan, removing the user from the members array
    const clan = await Clan.findByIdAndUpdate(
      clanId,
      { $pull: { members: userId } }, // Remove userId from members
      { new: true }
    );

    if (!clan) {
      return res.status(404).json({ message: "Clan not found" });
    }

    res.status(200).json({ message: "Left clan successfully", user, clan });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
export const switchClan = async (req, res) => {
  const { userId, currentClanId, newClanId } = req.body;

  try {
    // Update the user's clanId to newClanId
    const user = await User.findByIdAndUpdate(
      userId,
      { clanId: newClanId },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Remove the user from the current clan
    await Clan.findByIdAndUpdate(currentClanId, {
      $pull: { members: userId },
    });

    // Add the user to the new clan
    const newC = await Clan.findByIdAndUpdate(newClanId, {
      $push: { members: userId },
    });

    res
      .status(200)
      .json({ message: "Switched clan successfully", user, clan: newC });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};