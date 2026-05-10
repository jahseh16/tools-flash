
'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export default function TextAI() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: '¡Hola! Soy tu asistente de IA. Puedo ayudarte a escribir textos, responder preguntas, crear contenido y mucho más. ¿En qué puedo ayudarte hoy?',
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [chatType, setChatType] = useState<'casual' | 'creative' | 'professional'>('casual');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    try {
      const response = await fetch(`https://text.pollinations.ai/${encodeURIComponent(inputMessage)}`);
      const aiText = await response.text();
      
      // Simulate typing delay
      setTimeout(() => {
        const aiMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: aiText,
          isUser: false,
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, aiMessage]);
        setIsTyping(false);
      }, 1500);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Lo siento, ha ocurrido un error. Por favor, inténtalo de nuevo.',
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: '1',
        text: '¡Hola! Soy tu asistente de IA. ¿En qué puedo ayudarte hoy?',
        isUser: false,
        timestamp: new Date()
      }
    ]);
  };

  const quickPrompts = [
    "Escribe un poema sobre el amor",
    "Explícame la inteligencia artificial",
    "Crea una historia corta",
    "Dame consejos para estudiar",
    "Escribe un email profesional",
    "Ayúdame con mi tarea"
  ];

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('es-ES', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl">
                🤖
              </div>
              <div>
                <h2 className="text-xl font-bold">Chat IA</h2>
                <p className="text-violet-100 text-sm">Asistente inteligente</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <select
                value={chatType}
                onChange={(e) => setChatType(e.target.value as any)}
                className="bg-white/10 border border-white/20 rounded-lg px-3 py-1 text-sm text-white"
              >
                <option value="casual">Casual</option>
                <option value="creative">Creativo</option>
                <option value="professional">Profesional</option>
              </select>
              <button
                onClick={clearChat}
                className="!rounded-button bg-white/10 hover:bg-white/20 px-3 py-1 text-sm transition-colors"
              >
                <i className="ri-refresh-line w-4 h-4 flex items-center justify-center"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="h-96 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                  message.isUser
                    ? 'bg-violet-600 text-white'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                <p className={`text-xs mt-1 ${
                  message.isUser ? 'text-violet-200' : 'text-gray-500'
                }`}>
                  {formatTime(message.timestamp)}
                </p>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-2xl max-w-xs">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Prompts */}
        {messages.length <= 1 && (
          <div className="px-4 py-2 border-t border-gray-100">
            <p className="text-sm text-gray-600 mb-2">Sugerencias rápidas:</p>
            <div className="grid grid-cols-2 gap-2">
              {quickPrompts.map((prompt, index) => (
                <button
                  key={index}
                  onClick={() => setInputMessage(prompt)}
                  className="!rounded-button bg-gray-100 text-gray-700 px-3 py-2 text-sm hover:bg-gray-200 transition-colors text-left"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="p-4 border-t border-gray-100">
          <div className="flex space-x-2">
            <textarea
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Escribe tu mensaje..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent resize-none"
              rows={1}
              maxLength={1000}
            />
            <button
              onClick={sendMessage}
              disabled={!inputMessage.trim() || isTyping}
              className="!rounded-button bg-violet-600 text-white px-4 py-3 hover:bg-violet-700 transition-colors disabled:opacity-50 flex items-center justify-center"
            >
              <i className="ri-send-plane-line w-4 h-4 flex items-center justify-center"></i>
            </button>
          </div>
          <div className="text-right text-xs text-gray-500 mt-1">
            {inputMessage.length}/1000
          </div>
        </div>
      </div>
    </div>
  );
}
