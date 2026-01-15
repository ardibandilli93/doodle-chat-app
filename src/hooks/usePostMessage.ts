import { useState } from 'react'
import { postMessage } from '../api/postMessage'
import type { Message, NewMessage } from '../types/message'

export const usePostMessage = () => {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<Message[]>([])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>, refetch?: () => Promise<void>) => {
    event.preventDefault()
    const payload: NewMessage = {
      author: 'Me',
      message: message,
    }
    
    setMessage('')
    await postMessage(payload)
    if (refetch) await refetch()
  }

  return { message, setMessage, messages, setMessages, handleChange, handleSubmit }
}

