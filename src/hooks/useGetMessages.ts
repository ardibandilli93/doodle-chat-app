import { useEffect, useState } from 'react'
import { fetchMessages } from '../api/fetchMessages'
import type { Message } from '../types/message'

export const useGetMessages = () => {
  const [messages, setMessages] = useState<Message[]>([])

  const refetch = async () => {
    const data = await fetchMessages()
    setMessages(data)
  }

  useEffect(() => {
    fetchMessages().then((data) => {
      setMessages(data)
    })
  }, [])

  return { messages, refetch }
}
