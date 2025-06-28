import { Router, Request, Response } from "express"
import { updateTaskMiddleware } from "../middleware/updateTaskMiddleware"
import { prisma } from "../lib/prisma"

export const updateTaskRouter = Router()

updateTaskRouter.put("/tasks/:id", updateTaskMiddleware, async (req: CustomRequest, res: Response) => {
  const { id } = req.params
  const { name, category, updateIn, description, status, nivel, priority } = req.body

  try {
    const updatedTask = await prisma.task.update({
      where: { id },
      data: {
        name,
        category,
        description,
        status,
        nivel,
        priority,
        updateIn: new Date()
      }
    })

    return res.status(200).json({ 
      message: "Task updated successfully!",
      task: updatedTask
    })
  } catch (error) {
    console.log("Updated error:", error)
    return res.status(500).json({ message: "Failed to update task." })
  }
})