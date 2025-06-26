import { Router, Request, Response } from "express"
import { tasks } from "../database/task"

export const getTaskRouter = Router()
getTaskRouter.get("/", (req: Request, res: Response) => {
  res.json(tasks)
})