import type { Message } from '../../types/message';
import './MessageBubble.css'

type MessageBubbleProps = {
  position: 'left' | 'right';
  message: Message;
}

const MessageBubble = ({ position, message }: MessageBubbleProps) => {
  const formattedTime = new Date(message.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  return (
    <div className={`message-bubble ${position === 'right' ? 'message-bubble-right' : 'message-bubble-left'}`}>
      {message.author !== "Me" && <span>{message.author}</span>}
      <p>{message.message}</p>
      <span id="message-time">{formattedTime}</span>
    </div>
  )
}

export default MessageBubble;
