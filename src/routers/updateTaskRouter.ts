import { Router, Request, Response } from "express"
import { updateTaskMiddleware } from "../middleware/updateTaskMiddleware"
import { tasks } from "../database/task"

export const updateTaskRouter = Router()

interface CustomRequest extends Request {
  taskId: number
}


updateTaskRouter.put("/tasks/:id", updateTaskMiddleware, (req: CustomRequest, res: Response) => {
  const { name, category, updateIn, description, status, nivel, priority } = req.body
  const taskId = req.taskId
  const oldTask = tasks[taskId]

  const updatedTask = {
    ...oldTask,
    name: name ?? oldTask.name,
    category: category ?? oldTask.category,
    description: description ?? oldTask.description,
    status: status ?? oldTask.status,
    nivel: nivel ?? oldTask.nivel,
    priority: priority ?? oldTask.priority,
    updateIn: updateIn ?? new Date().toISOString()
  }
 
  tasks[taskId] = updatedTask

  return res.status(200).json({ 
    message: "Task update successfully!",
    task: updatedTask
  })
})