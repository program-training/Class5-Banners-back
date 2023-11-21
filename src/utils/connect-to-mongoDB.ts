import { connect } from 'mongoose'

export default async () => {
    await connect(process.env.MONGODB_URI || '')
}