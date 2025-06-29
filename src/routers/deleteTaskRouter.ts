import { Router, Request, Response } from "express"
import { prisma } from "../lib/prisma"
import { deleteTaskMiddleware } from "../middleware/deleteTaskMiddleware"

export const deleteTaskRouter = Router()


deleteTaskRouter.delete("/tasks/:id", deleteTaskMiddleware, async (req: Request, res: Response): Promise<void>  => {
  const { id } =  req.params

  try {
    const deleted = await prisma.task.delete({
      where: { id }
    })
    
    res.status(200).json({ 
      message: "Task deleted successfully!",
      task: deleted
    })
  } catch (error) {
    console.error("Erro delele task:", error)
    res.status(500).json({ message: "Failed to delete task."})
  }


  

}) 