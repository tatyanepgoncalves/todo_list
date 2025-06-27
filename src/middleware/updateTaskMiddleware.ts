import { Request, Response, NextFunction } from "express";
import { tasks } from "../database/task";

export function updateTaskMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params

  const taskId = tasks.findIndex((task) => task.id === id)

  if (taskId === -1) {
    return res.status(404).json({ message: "Task not found." })
  }

  (req as Request & { taskId: number }).taskId = taskId

  return next()
}
