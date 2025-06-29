import "dotenv/config"
import express from "express"
import { getTaskRouter } from "./routers/getTaskRouter"
import { createTaskRouter } from "./routers/createTaskRouter"
import { updateTaskRouter } from "./routers/updateTaskRouter"
import { deleteTaskRouter } from "./routers/deleteTaskRouter"

const app = express()
const port = process.env.PORT || 3333

app.use(express.json())

// Routers
app.use(getTaskRouter)
app.use(createTaskRouter)
app.use(updateTaskRouter)
app.use(deleteTaskRouter)

app.listen(port, () => {
  console.log(`HTTP server is running on http://localhost:${port}/tasks`)
})