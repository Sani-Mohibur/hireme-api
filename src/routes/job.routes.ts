import express from "express";
import {
  createJob,
  deleteJob,
  getAllJobs,
  getJobById,
  updateJob,
} from "../controllers/job.controller";
import { protect, restrictTo } from "../middlewares/auth.middleware";
import { UserRole } from "../constants/roles";
import { validate } from "../middlewares/validate.middleware";
import { createJobSchema } from "../schemas/job.schema";

const router = express.Router();

// Public Routes
router.get("/", getAllJobs);
router.get("/:id", getJobById);

// Protected Routes
router.use(protect); // All routes below this line require login
router.post(
  "/",
  restrictTo(UserRole.EMPLOYEE),
  validate(createJobSchema),
  createJob
);
router.put("/:id", restrictTo(UserRole.EMPLOYEE, UserRole.ADMIN), updateJob);
router.delete("/:id", restrictTo(UserRole.EMPLOYEE, UserRole.ADMIN), deleteJob);

export default router;
