// Import dependencies
import { Clan } from "../data/mongodb.js";
import { User } from "../data/mongodb.js";
import mongoose from "mongoose";
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
      {
        $set: {
          clanId: savedClan._id,
        },
      }
    );

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
    const updatedClan = await Clan.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedClan) {
      return res
        .status(404)
        .json({ success: false, message: "Clan not found" });
    }

    res.status(200).json({ success: true, data: updatedClan });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Delete a clan by ID
export const deleteClan = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedClan = await Clan.findByIdAndDelete(id);

    if (!deletedClan) {
      return res
        .status(404)
        .json({ success: false, message: "Clan not found" });
    }

    res
      .status(200)
      .json({ success: true, message: "Clan deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
