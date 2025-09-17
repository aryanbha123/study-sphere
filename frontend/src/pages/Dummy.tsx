import express from "express"
import React from "react"
import { renderToPipeableStream } from "react-dom/server"
import App from "./App.js"

const app = express()

app.get("*", (req, res) => {
  res.setHeader("Content-Type", "text/html")

  const { pipe } = renderToPipeableStream(
    <App />,
    {
      onShellReady() {
        pipe(res) 
      },
      onError(err) {
        console.error(err)
        res.status(500).send("Something went wrong")
      }
    }
  )
})

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000")
})
