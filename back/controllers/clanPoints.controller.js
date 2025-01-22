import { ClanPoints } from "../data/mongodb.js";

export const createClanPoint = async (req, res) => {
    try {
      const { clanName, points, clanId } = req.body;
  
      const newClanPoint = new ClanPoints({
        clanName,
        points,
        clanId,
      });
  
      await newClanPoint.save();
      res.status(201).json(newClanPoint);
    } catch (error) {
      res.status(500).json({ message: "Failed to create clan point", error });
    }
  };
  
  export const deleteClanPoint = async (req, res) => {
    try {
      const { id } = req.params;
  
      const deletedClanPoint = await ClanPoints.findByIdAndDelete(id);
  
      if (!deletedClanPoint) {
        return res.status(404).json({ message: "Clan point not found" });
      }
  
      res.status(200).json({ message: "Clan point deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Failed to delete clan point", error });
    }
  };
  
  export const getClanPoints = async (req, res) => {
    try {
      const clanPoints = await ClanPoints.find();
      res.status(200).json(clanPoints);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch clan points", error });
    }
  };
  

  export const getClanPointByClanId = async (req, res) => {
    try {
      const { clanId } = req.params; // Expecting clanId in the route parameter
      
      const clanPoint = await ClanPoints.findOne({ clanId });
  
      if (!clanPoint) {
        return res.status(404).json({ message: "Clan point not found" });
      }
  
      res.status(200).json(clanPoint);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch clan point", error });
    }
  };
  
  export const updateClanPoint = async (req, res) => {
    try {
      const { id } = req.params;
      const { clanName, points, clanId } = req.body;
  
      const updatedClanPoint = await ClanPoints.findByIdAndUpdate(
        id,
        { clanName, points, clanId },
        { new: true, runValidators: true }
      );
  
      if (!updatedClanPoint) {
        return res.status(404).json({ message: "Clan point not found" });
      }
  
      res.status(200).json(updatedClanPoint);
    } catch (error) {
      res.status(500).json({ message: "Failed to update clan point", error });
    }
  };
  