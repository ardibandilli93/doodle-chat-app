import './ChatLayout.css'

const ChatLayout = () => {
  return (
      <div className="chat-layout">
        <div className="chat-header">The Doodle Group</div>
        <div className="chat-message-section">
          <div className="p-4">
            <h2 className="text-2xl font-bold">Chat Room</h2>
            <p>Welcome to the chat room. You can start typing your message here.</p>
          </div>
        </div>
        <div className="chat-input-section">
            <input type="text" className="message-input" placeholder="Type your message here..." />
            <button className="send-button">Send</button>
        </div>
      </div>
  )
}

export default ChatLayout