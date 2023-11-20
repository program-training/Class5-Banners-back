import express, { json } from 'express'
import cors from 'cors'
import 'dotenv/config'
import { connect } from 'mongoose'
import morgan from 'morgan'
import chalk from 'chalk'

import { transporter } from './utils/send-email'
import router from './router/router'
import errors from './errors/massages'

const app = express()

app.use(morgan(':date[iso] :method :url :status :response-time ms'))
app.use(cors())
app.use(json())
app.use(router)

const start = async () => {
    console.log(chalk.blue('connecting to mongoBD...'));
    if (!process.env.MONGODB_URI) throw new Error(errors.DBURImissing);
    await connect(process.env.MONGODB_URI)
    console.log(chalk.green('connected successfully to mongoDB'));

    // console.log(chalk.blue('verifying gmail client...'));
    // if (!process.env.GMAIL_USERNAME) throw new Error(errors.gmailUNmissing);
    // if (!process.env.GMAIL_APP_PASSWORD) throw new Error(errors.gmailPWmissing);
    // await transporter.verify()
    // console.log(chalk.green('gmail client successfully verified'));

    const port = process.env.PORT
    if (!port) throw new Error(errors.portMissing);
    app.listen(port, () => {
        console.log(chalk.green(`server is running on port ${port}`));
    })
}

start()