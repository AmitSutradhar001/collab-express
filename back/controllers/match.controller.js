import { Match } from "../data/mongodb.js";

// Controller function to create a new match
export const createMatch = async (req, res) => {
    try {
        const { contestName, isLive, isOver, isUpcoming } = req.body;

        // Ensure only one status is true
        if ([isLive, isOver, isUpcoming].filter(Boolean).length > 1) {
            return res.status(400).json({ message: 'Only one of isLive, isOver, or isUpcoming can be true.' });
        }

        // Create and save the match
        const match = new Match({
            contestName,
            isLive: isLive || false,
            isOver: isOver || false,
            isUpcoming: isUpcoming || true
        });

        await match.save();
        res.status(201).json({ message: 'Match created successfully!', match });
    } catch (error) {
        res.status(500).json({ message: 'Failed to create match.', error: error.message });
    }
};

// Controller function to get all matches
export const getAllMatches = async (req, res) => {
    try {
        const matches = await Match.find();
        res.status(200).json(matches);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve matches.', error: error.message });
    }
};

// Controller function to get a match by ID
export const getMatchById = async (req, res) => {
    try {
        const { id } = req.params;
        const match = await Match.findById(id);
        if (!match) {
            return res.status(404).json({ message: 'Match not found.' });
        }
        res.status(200).json(match);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve match.', error: error.message });
    }
};

// Controller function to update a match by ID
export const updateMatch = async (req, res) => {
    try {
        const { id } = req.params;
        const { contestName, isLive, isOver, isUpcoming } = req.body;

        // Ensure only one status is true
        if ([isLive, isOver, isUpcoming].filter(Boolean).length > 1) {
            return res.status(400).json({ message: 'Only one of isLive, isOver, or isUpcoming can be true.' });
        }

        const match = await Match.findByIdAndUpdate(id, {
            contestName,
            isLive: isLive || false,
            isOver: isOver || false,
            isUpcoming: isUpcoming || true
        }, { new: true });

        if (!match) {
            return res.status(404).json({ message: 'Match not found.' });
        }

        res.status(200).json({ message: 'Match updated successfully!', match });
    } catch (error) {
        res.status(500).json({ message: 'Failed to update match.', error: error.message });
    }
};

// Controller function to delete a match by ID
export const deleteMatch = async (req, res) => {
    try {
        const { id } = req.params;
        const match = await Match.findByIdAndDelete(id);
        if (!match) {
            return res.status(404).json({ message: 'Match not found.' });
        }
        res.status(200).json({ message: 'Match deleted successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete match.', error: error.message });
    }
};