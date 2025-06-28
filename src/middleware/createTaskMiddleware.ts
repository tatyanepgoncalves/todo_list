import { Request, Response, NextFunction } from "express"
import { prisma } from "../lib/prisma"


export async function createTaskMiddleware(req: Request, res: Response, next: NextFunction) {
  const { name, category, description } = req.body

  if (!name.trim() || !category?.trim()) {
    return res.status(400).json({ error: "Mandatory fields to be filled in."})
  }

  const taskExists = await prisma.task.findFirst({
    where: {
      name: { equals: name, mode: "insensitive" },
      description: { equals: description || "", mode: "insensitive"}
    }
  })

  if (taskExists) {
    return res.status(409).json({ message: "Task already exists." })
  }

  return next()
}