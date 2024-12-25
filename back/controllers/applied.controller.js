import { Applied } from "../data/mongodb.js";

// Create a new application
export const createApplication = async (req, res) => {
  const { issueId, content, projectId } = req.body;
  console.log(issueId, content, projectId);

  try {
    const newApplication = new Applied({
      issueId: issueId,
      projectId: projectId,
      content,
    });
    console.log("as");

    const savedApplication = await newApplication.save();
    console.log("sa");

    res.status(201).json(savedApplication);
  } catch (error) {
    res.status(500).json({ message: "Failed to create application", error });
  }
};

// Delete an application by ID
export const deleteApplication = async (req, res) => {
  const { id } = req.body;

  try {
    const deletedApplication = await Applied.findByIdAndDelete(id);
    if (!deletedApplication) {
      return res.status(404).json({ message: "Application not found" });
    }
    res.status(200).json({ message: "Application deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete application", error });
  }
};

// Get all applications
export const getApplications = async (req, res) => {
  try {
    const applications = await Applied.find();
    res.status(200).json(applications);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch applications", error });
  }
};

// Get an application by ID
export const getApplicationByIssueId = async (req, res) => {
  const { issueId } = req.params;

  try {
    const application = await Applied.find({ issueId });
    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }
    res.status(200).json({ applications: application });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch application", error });
  }
};
// Get an application by ID
export const getApplicationByProjectId = async (req, res) => {
  const { projectId } = req.params;

  try {
    const application = await Applied.find({ projectId }); // Use findOne with a query filter
    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }
    res.status(200).json({ applications: application });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch application", error });
  }
};
