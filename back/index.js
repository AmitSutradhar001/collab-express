import express from "express";
import "dotenv/config";
import cors from "cors";
import cookieParser from "cookie-parser";
import notFound from "./error/notFound.js";
import err from "./error/err.js";
import "dotenv/config";
import userRouter from "./routes/user.router.js";
import authRouter from "./routes/auth.router.js";
import projectRouter from "./routes/project.router.js";
import appliedRouter from "./routes/applied.router.js";
import projectIssueRouter from "./routes/projectIssue.router.js";
import clanRouter from "./routes/clanRouter.router.js";
import warlogRouter from "./routes/warlog.router.js";
import clanPointsRouter from "./routes/clanPoints.router.js";
import receiptRouter from "./routes/receipt.router.js";
import matchRouter from "./routes/match.router.js";
// Initialize the app
const app = express();

// Middleware
const corsOptions = {
  origin: "http://localhost:5173", // Replace with your frontend URL *process.env.CORS_URL*
  credentials: true, // Allow cookies
};
app.use(cors(corsOptions)); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse incoming JSON requests
app.use(cookieParser());

// Routes
app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/project", projectRouter);
app.use("/issue", projectIssueRouter);
app.use("/application", appliedRouter);
app.use("/clan", clanRouter);
app.use("/warlog", warlogRouter);
app.use("/clan_points", clanPointsRouter);
app.use("/receipt", receiptRouter);
app.use("/match", matchRouter);

// Error handling middleware
app.use(notFound); // Handle 404 errors
app.use(err); // Handle other errors

// Server setup
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
