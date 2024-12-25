import { ProjectIssue } from "../data/mongodb.js";

export const createProjectIssue = async (req, res) => {
  try {
    const { projectId, title, content, tech_stack, price, endDate } = req.body;
    const date = new Date(endDate);

    const newProjectIssue = new ProjectIssue({
      projectId,
      title,
      content,
      tech_stack,
      price,
      endDate: date,
    });

    await newProjectIssue.save();

    res.status(201).json({
      success: true,
      message: "Project issue created successfully.",
      data: newProjectIssue,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Error creating Project issue",
      statusCode: 500,
    });
  }
};
export const updateProjectIssue = async (req, res) => {
  try {
    const { postId } = req.params; // assuming the postId is passed as a URL parameter
    const updateData = req.body; // Data to be updated

    const projectIssue = await ProjectIssue.findByIdAndUpdate(
      postId,
      updateData,
      {
        new: true, // Return the updated document
      }
    );

    if (!projectIssue) {
      return res.status(404).json({
        success: false,
        message: "Project issue not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Project issue updated successfully.",
      data: projectIssue,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Error updating Project issue",
      statusCode: 500,
    });
  }
};
export const deleteProjectIssue = async (req, res) => {
  try {
    const { postId } = req.params; // assuming postId is passed as a URL parameter

    const projectIssue = await ProjectIssue.findByIdAndDelete(postId);

    if (!projectIssue) {
      return res.status(404).json({
        success: false,
        message: "Project issue not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Project issue deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Error deleting Project issue",
      statusCode: 500,
    });
  }
};
export const getProjectsIssue = async (req, res) => {
  try {
    const projectIssues = await ProjectIssue.find();

    res.status(200).json({
      success: true,
      data: projectIssues,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Error fetching Project issues",
      statusCode: 500,
    });
  }
};
export const getTheProjectIssue = async (req, res) => {
  try {
    const { id } = req.params; // assuming postId is passed as a URL parameter

    const projectIssue = await ProjectIssue.findById(postId);

    if (!projectIssue) {
      return res.status(404).json({
        success: false,
        message: "Project issue not found",
      });
    }

    res.status(200).json({
      success: true,
      data: projectIssue,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Error fetching Project issue",
      statusCode: 500,
    });
  }
};

export const getAllTheProjectIssuesByProjectId = async (req, res, next) => {
  try {
    const { projectId } = req.params; // Extract the project ID from the request parameters

    // Fetch all issues from the database by project ID
    const issues = await ProjectIssue.find({ projectId });

    // If no issues are found, return a 404 response
    if (issues.length === 0) {
      return res
        .status(404)
        .json({ message: "No issues found for this project" });
    }

    // Return response with the fetched issues
    return res.status(200).json({ issues, message: "Issues found" });
  } catch (error) {
    return next({
      status: error.status || 500,
      message:
        error.message || "An error occurred while fetching the project issues.",
    });
  }
};
