import { Request, Response, NextFunction } from "express"
import { tasks } from "../database/task"

export function createTaskMiddleware(req: Request, res: Response, next: NextFunction) {
  const { name, category, status } = req.body

  if (!name || !category) {
    return res.status(400).json({ error: "Mandatory fields to be filled in."})
  }

  const taskExists = tasks.find((task) => 
    task.name.toLowerCase() === req.body.name.toLowerCase() &&
    (task.description?.toLowerCase() || "") === (req.body.description?.toLowerCase() || "")
  )

  if (taskExists) {
    return res.status(409).json({ message: "Task already exists." })
  }

  return next()
}