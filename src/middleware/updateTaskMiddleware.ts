import { Request, Response, NextFunction } from "express";
import { prisma } from "../lib/prisma";

export async function updateTaskMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params

  const task = await prisma.task.findUnique({ where: {id} })

  if (!task) {
    return res.status(404).json({ message: "Task not found." })
  }

  (req as any).taskId = id

  return next()
}
