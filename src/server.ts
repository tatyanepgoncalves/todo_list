import express from "express"
import { getTaskRouter } from "./routers/getTaskRouter"
import { createTaskRouter } from "./routers/createTaskRouter"
import { getTaskByStatusRouter } from "./routers/getTaskByStatusRouter"
import { updateTaskRouter } from "./routers/updateTaskRouter"

const app = express()

app.use(express.json())

// Routers
app.use(getTaskRouter)
app.use(createTaskRouter)
app.use(getTaskByStatusRouter)
app.use(updateTaskRouter)

app.listen(3333, () => {
  console.log("HTTP server is running on http://localhost:3333")
})