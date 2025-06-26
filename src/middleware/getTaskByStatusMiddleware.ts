import { Request, Response, NextFunction } from "express";
import { tasks } from "../database/task";

export function getTaskByStatusMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { status } = req.query;

  if (!status || typeof status !== "string") {
    return res
      .status(400)
      .json({
        message: "Parameter 'status' is required and must to be a string.",
      });
  }

  const normalStatus = status.toLowerCase();

  const filterStatus = tasks.filter((task) => {
    return task.status.toLowerCase() === normalStatus;
  });

  if (filterStatus.length === 0) {
    return res.status(404).json({ message: "No tasks not found!" });
  }

  (req as any).filterStatus = filterStatus;
  return next()
}
