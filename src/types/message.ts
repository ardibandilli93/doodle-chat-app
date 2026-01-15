export type Message = {
    _id: string
    author: string
    message:string
    createdAt: string
}

export type NewMessage = Pick<Message, 'author' | 'message'>
