import { Project } from "../data/mongodb.js";

export const createProject = async (req, res, next) => {
  try {
    const {
      userId,
      title,
      content,
      tech_stack,
      postImage = undefined,
      category,
      endDate,
    } = req.body; // Extract post data from the request body

    const date = new Date(endDate);

    // Create a new post instance
    const newProject = new Project({
      userId,
      title,
      content,
      postImage,
      tech_stack,
      category,
      endDate: date,
    });

    // Save the new post to the database
    const savedProject = await newProject.save();

    // Return response with the saved post
    return res
      .status(201)
      .json({ project: savedProject, message: "Project created successfully" });
  } catch (error) {
    return next({
      status: error.status || 500,
      message: error.message || "An error occurred while creating the post.",
    });
  }
};
export const getProjects = async (req, res, next) => {
  try {
    // Fetch all posts from the database
    const projects = await Project.find();

    // Return response with the fetched posts
    return res.status(200).json({ projects, message: "Posts are here!" });
  } catch (error) {
    return next({
      status: error.status || 500,
      message: error.message || "An error occurred while fetching posts.",
    });
  }
};
export const getTheProject = async (req, res, next) => {
  try {
    const { id } = req.params; // Extract the post ID from the request parameters

    // Fetch the post from the database by its ID
    const project = await Project.findById(id);

    // If no post is found, return a 404 response
    if (!project) {
      return res.status(404).json({ message: "Project not found!" });
    }

    // Return response with the fetched post
    return res.status(200).json({ project, message: "Post found" });
  } catch (error) {
    return next({
      status: error.status || 500,
      message: error.message || "An error occurred while fetching the post.",
    });
  }
};
export const deleteProject = async (req, res, next) => {
  try {
    const { id } = req.params; // Extract the post ID from the request parameters

    // Delete the post from the database by its ID
    const deletedProject = await Project.findByIdAndDelete(id);

    // If no post is found, return a 404 response
    if (!deletedProject) {
      return res.status(404).json({ message: "Project not found!" });
    }

    // Return response confirming the deletion
    return res.status(200).json({ message: "Project deleted successfully!" });
  } catch (error) {
    return next({
      status: error.status || 500,
      message: error.message || "An error occurred while deleting the post.",
    });
  }
};
export const updateProject = async (req, res, next) => {
  try {
    const { id } = req.params; // Extract the post ID from the request parameters
    const {
      title,
      content,
      tech_stack,
      postImage = undefined,
      category,
      endDate,
    } = req.body; // Extract post data from the request body

    const date = new Date(endDate);
    // Update the post in the database by its ID
    const updatedProject = await Project.findByIdAndUpdate(
      id,
      {
        title,
        content,
        postImage,
        tech_stack,
        category,
        endDate: date,
      },
      {
        new: true, // Return the updated document
        runValidators: true, // Ensure the update adheres to the schema
      }
    );

    // If no post is found, return a 404 response
    if (!updatedProject) {
      return res.status(404).json({ message: "Project not found!" });
    }

    // Return response with the updated post
    return res.status(200).json({
      oproject: updatedProject,
      message: "Project updated successfully!",
    });
  } catch (error) {
    return next({
      status: error.status || 500,
      message: error.message || "An error occurred while updating the post.",
    });
  }
};
// get Posts by user id ARRAY
export const getProjectByUserId = async (req, res, next) => {
  try {
    const { userId } = req.params; // Extract the user ID from the request parameters

    // Fetch the posts from the database by user ID
    const projects = await Project.find({ userId });

    // If no posts are found, return a 404 response
    if (projects.length === 0) {
      return res
        .status(404)
        .json({ message: "No projects found for this user!" });
    }

    // Return response with the fetched posts
    return res.status(200).json({ projects, message: "Projects found!" });
  } catch (error) {
    return next({
      status: error.status || 500,
      message:
        error.message || "An error occurred while fetching the projects.",
    });
  }
};
