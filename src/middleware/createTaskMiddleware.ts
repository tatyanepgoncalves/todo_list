import { Request, Response, NextFunction } from "express"
import { prisma } from "../lib/prisma"


export async function createTaskMiddleware(req: Request, res: Response, next: NextFunction): Promise<void> {
  const { name, category, description } = req.body

  if (!name.trim() || !category?.trim()) {
    res.status(400).json({ error: "Mandatory fields to be filled in."})
  }

  const taskExists = await prisma.task.findFirst({
    where: {
      name: { equals: name, mode: "insensitive" },
      description: { equals: description || "", mode: "insensitive"}
    }
  })

  if (taskExists) {
    res.status(409).json({ message: "Task already exists." })
  }

  return next()
}