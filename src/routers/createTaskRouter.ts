import { Router, Request, Response } from "express"
import { tasks } from "../database/task"
import { createTaskMiddleware } from "../middleware/createTaskMiddleware"
import { randomUUID } from "crypto"

type statusTask = "pendente" | "concluída";
type priorityTask = "baixa" | "média" | "alta";

interface Task {
  id?: string;
  name: string;
  category: string;
  createdIn: string;
  status: statusTask;
  priority?: priorityTask;
  description?: string;
  updateIn?: string;
}

export const createTaskRouter = Router()

createTaskRouter.post("/", createTaskMiddleware, (req: Request, res: Response): any => {
  const { name, category, status = "pendente", description, createdIn, priority } = req.body

  const newTask: Task = {
    id: randomUUID(),
    name, 
    category, 
    createdIn: new Date().toISOString(),
    status,
    description, 
    priority, 
  }

  tasks.push(newTask)

  return res.status(201).json({
    message: "Task created sucessfully!",
    task: newTask
  })
})