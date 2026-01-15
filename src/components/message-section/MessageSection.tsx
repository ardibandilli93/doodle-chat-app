import type { Message } from '../../types/message'
import MessageBubble from "../message-bubble/MessageBubble"
import './message-section.css'

type MessageSectionProps = {
  messages: Message[]
}

const MessageSection = ({ messages }: MessageSectionProps) => {
  return (
    <div className="message-section">
      {messages.map((message) => (
        <div key={message._id}>
          <MessageBubble position={message.author === 'Me' ? 'right' : 'left'} message={message} />
        </div>
      ))}
    </div>
  )
}

export default MessageSection