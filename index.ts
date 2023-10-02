import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv'

// env file config
dotenv.config()

// express initialization
const app: Express = express()
const port = process.env.PORT || 8080

// route definition of app
app.get('/', (req: Request, res: Response) => {
    // send a message
    res.send('connect sussesfuly on port: ' + port)
})

// listen request
app.listen(port, () => console.log(`Express server runing at http://localhost:${port}`))