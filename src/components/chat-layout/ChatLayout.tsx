import './ChatLayout.css'
import MessageSection from '../message-section/MessageSection'
import MessageFooter from '../message-footer/MessageFooter'
import { useGetMessages } from '../../hooks/useGetMessages'

const ChatLayout = () => {
  const { messages, refetch } = useGetMessages()
  return (
      <div className="chat-layout">
        <div className="chat-header">The Doodle Group</div>
        <div className="chat-message-section">
          <MessageSection messages={messages} />
        </div>
        <MessageFooter refetch={refetch} />
      </div>
  )
}

export default ChatLayout