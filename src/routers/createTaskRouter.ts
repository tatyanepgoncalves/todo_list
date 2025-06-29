import { Router, Request, Response } from "express"
import { createTaskMiddleware } from "../middleware/createTaskMiddleware"
import { prisma } from "../lib/prisma"

export const createTaskRouter = Router()

createTaskRouter.post("/tasks", createTaskMiddleware, async (req: Request, res: Response): Promise<void>  => {
  const { name, category, status = "pendente", description, priority } = req.body

  try {
    const newTask = await prisma.task.create({
      data: {
        name,
        category,
        status,
        description,
        priority
      }
    })
    res.status(201).json({
      message: "Task created sucessfully!",
      task: newTask
    })
    
  } catch (error) {
    console.log("Error creating task", error)
    res.status(500).json({ message: "Failed to create task."})
  }
})