import { Router, Request, Response } from "express"
import { tasks } from "../database/task"
import { deleteTaskMiddleware } from "../middleware/deleteTaskMiddleware"

export const deleteTaskRouter = Router()


interface CustomRequest extends Request {
  taskId: number
}

deleteTaskRouter.delete("/tasks/:id", deleteTaskMiddleware, (req: CustomRequest, res: Response) => {
  const taskId =  req.taskId 
  const deleted = tasks.splice(taskId, 1);
  

  return res.status(200).json({ 
    message: "Task deleted successfully!",
    task: deleted[0]
  })
}) 