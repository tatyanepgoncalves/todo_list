import { Request, Response, NextFunction } from "express";
import { prisma } from "../lib/prisma";

export async function deleteTaskMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const { id } = req.params;

  try {
    const task = await prisma.task.findUnique({
      where: { id }
    })

    if (!task){
      res.status(404).json({ message: "Task not found."})
    }

    return next()
  } catch (error) {
    console.error("Erro no middleware de delete:", error)
    res.status(500).json({ message: "Erro ao validar task." })
  }
}
