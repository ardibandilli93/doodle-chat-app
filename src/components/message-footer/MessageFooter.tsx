import { usePostMessage } from "../../hooks/usePostMessage"
import './message-footer.css'

type MessageFooterProps = {
  refetch?: () => Promise<void>
}

const MessageFooter = ({ refetch }: MessageFooterProps) => {
  const { handleSubmit, handleChange, message } = usePostMessage()
  return (  
    <form className="message-footer" onSubmit={(e) => handleSubmit(e, refetch)}>
      <input value={message} onChange={handleChange} type="text" className="message-input" placeholder="Type your message here..." />
      <button type="submit" className="send-button">Send</button>
    </form>
  )
}

export default MessageFooter
