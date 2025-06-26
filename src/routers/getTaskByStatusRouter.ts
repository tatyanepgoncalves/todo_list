import { Router, Request, Response } from "express"
import { getTaskByStatusMiddleware } from "../middleware/getTaskByStatusMiddleware"

export const getTaskByStatusRouter = Router()

getTaskByStatusRouter.get("/tasks", getTaskByStatusMiddleware, (req: Request, res: Response): any => {
  const filterStatus = (req as any).filterStatus


  return res.status(200).json(filterStatus)

})