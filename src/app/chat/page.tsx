'use client'

import { useState } from 'react'

export default function ChatPage() {
  const [messages, setMessages] = useState<Array<{id: string, text: string, sender: 'user' | 'ai'}>>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const sendMessage = async () => {
    if (!input.trim()) return

    const userMessage = { id: Date.now().toString(), text: input, sender: 'user' as const }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      })

      const data = await response.json()
      const aiMessage = { id: (Date.now() + 1).toString(), text: data.message, sender: 'ai' as const }
      setMessages(prev => [...prev, aiMessage])
    } catch (error) {
      console.error('Failed to send message:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Chat with Scuzi AI</h1>
      
      <div className="bg-white rounded-lg shadow-lg h-96 mb-4 p-4 overflow-y-auto">
        {messages.length === 0 && (
          <p className="text-gray-500 text-center">Start a conversation about meal planning!</p>
        )}
        
        {messages.map((message) => (
          <div
            key={message.id}
            className={`mb-4 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}
          >
            <div
              className={`inline-block p-3 rounded-lg max-w-xs lg:max-w-md ${
                message.sender === 'user'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-800'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
        
        {loading && (
          <div className="text-left">
            <div className="inline-block p-3 rounded-lg bg-gray-200 text-gray-800">
              Thinking...
            </div>
          </div>
        )}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Ask about meal planning, nutrition, or WHOOP data..."
          className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={loading}
        />
        <button
          onClick={sendMessage}
          disabled={loading || !input.trim()}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Send
        </button>
      </div>
    </div>
  )
}