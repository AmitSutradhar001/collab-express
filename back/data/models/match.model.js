import mongoose, {Schema} from 'mongoose';
// Define the Match schema
const matchSchema = new Schema({
    contestName: {
        type: String,
        required: true,
        trim: true
    },
    isLive: {
        type: Boolean,
        required: true,
        default: false
    },
    isOver: {
        type: Boolean,
        required: true,
        default: false
    },
    isUpcoming: {
        type: Boolean,
        required: true,
        default: true
    }
}, {
    timestamps: true // Adds createdAt and updatedAt fields automatically
});

// Add a method to update the status fields
matchSchema.methods.setStatus = function (status) {
    if (status === 'isLive') {
        this.isLive = true;
        this.isOver = false;
        this.isUpcoming = false;
    } else if (status === 'isOver') {
        this.isLive = false;
        this.isOver = true;
        this.isUpcoming = false;
    } else if (status === 'isUpcoming') {
        this.isLive = false;
        this.isOver = false;
        this.isUpcoming = true;
    } else {
        throw new Error('Invalid status value. Use "isLive", "isOver", or "isUpcoming".');
    }

    return this.save();
};

export default matchSchema
