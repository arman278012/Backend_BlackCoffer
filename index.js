const express = require('express')
const cors = require('cors')
require('dotenv').config()
const { router } = require('./Router/Route')
const { connection } = require('./Config/Connection')
const app = express()
app.use(cors({
    origin: "*"
}))

app.use(express.json())
app.use("", router)
app.listen(process.env.PORT, async () => {
    try {
        await connection
        console.log("connection sucess")
    }
    catch {
        console.log("conextion failed...")
    }
})