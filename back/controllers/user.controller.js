import bcryptjs from "bcryptjs";
import { User } from "../data/mongodb.js";

export const updateUser = async (req, res, next) => {
  try {
    const updateFields = {};

    // Hash password if provided
    if (req.body.password) {
      if (req.body.password.length < 6) {
        return next({
          status: 400,
          message: "Password must be at least 6 characters!",
        });
      }
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }

    // Validate fullname if provided
    if (req.body.fullname) {
      if (req.body.fullname.length < 7 || req.body.fullname.length > 20) {
        return next({
          status: 400,
          message: "Full name must be between 7 and 20 characters!",
        });
      }
    }

    // Add only provided fields to updateFields
    Object.keys(req.body).forEach((key) => {
      updateFields[key] = req.body[key];
    });

    const user = await User.findByIdAndUpdate(
      req.user._id,
      { $set: updateFields },
      { new: true }
    );

    if (!user) {
      return next({
        status: 404,
        message: "User not found.",
      });
    }

    const { password, ...rest } = user._doc;
    res.status(200).json({ user: rest });
  } catch (error) {
    return next({
      status: error.status || 500,
      message: error.message || "An error occurred while updating the user.",
    });
  }
};


export const deleteUser = async (req, res, next) => {
  const userId = req.user._id;
  if (!userId)
    return next({
      status: 404,
      message: "Sign In Again!",
    });
  try {
    await User.findByIdAndDelete(userId);
    return res.status(200).json({ message: "User has been deleted!" });
  } catch (error) {
    return next({
      status: error.status || 500,
      message: error.message || "An error occurred while deleting the user.",
    });
  }
};

export const getUsers = async (req, res, next) => {
  try {
    // Get the users sorted from latest to oldest based on 'createdAt'
    const users = await User.find().sort({ createdAt: -1 }).select("-password");

    return res
      .status(200)
      .json({ users, message: "Users retrieved successfully!" });
  } catch (error) {
    return next({
      status: error.status || 500,
      message: error.message || "An error occurred while fetching users.",
    });
  }
};

export const getTheUser = async (req, res, next) => {
  try {
    // Get the users with pagination, sorting, and excluding the password field
    const users = await User.findById(req.params.userId).select("-password");
    if (!users)
      return next({
        status: 404,
        message: "No user found!",
      });
    // Return response
    return res.status(200).json(users);
  } catch (error) {
    return next({
      status: error.status || 500,
      message: error.message || "An error occurred while fetching users.",
    });
  }
};
