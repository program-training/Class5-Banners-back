import { connect } from 'mongoose'

export default async (URI: string) => {
    await connect(URI)
}