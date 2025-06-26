import express from "express"
import { getTaskRouter } from "./routers/getTaskRouter"

const app = express()

app.use(express.json())

// Routers
app.use(getTaskRouter)

app.listen(3333, () => {
  console.log("HTTP server is running on http://localhost:3333")
})