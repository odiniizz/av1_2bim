import { api } from "../../api";

export interface IMessage {
    title?: string
    message?: string
}

export interface IResponseMessage {
    id: number
    user_id: number
    title: string
    message: string
    created_at: string
}

export interface IError {
    errors: {
        rule: string
        field: string
        message: string
    }[]
}

class MessageData {
    index() {
        return api.get<IResponseMessage[]>('/message')
    }
    store(data: IMessage) {
        return api.post('/message', data)
    }
}

export default new MessageData()