import { Router, Request, Response } from "express"
import { prisma } from "../lib/prisma"

export const getTaskRouter = Router()

getTaskRouter.get("/tasks", async (req: Request, res: Response) => {
  try {
    const tasks = await prisma.task.findMany()
    return res.status(200).json(tasks)
  } catch (error) {
    console.log("Error", error)
    return res.status(500).json({ message: "Failed the find tasks." })
  }
})