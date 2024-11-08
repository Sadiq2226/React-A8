import React, { useState } from 'react';
import axios from 'axios';
import { FaComments } from 'react-icons/fa';

const Chatbot = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);  // Add loading state
    const [error, setError] = useState(null);       // Add error state

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = { text: input, sender: 'user' };
        setMessages((prev) => [...prev, userMessage]);
        setInput('');
        setLoading(true);
        setError(null);

        try {
            // Gemini API endpoint (replace with the actual endpoint URL)
            const apiUrl = 'https://api.gemini.com/v1/chat';
            const response = await axios.post(apiUrl, {
                message: input,
                // Add any other required fields here if necessary
            }, {
                headers: {
                    'Authorization': `Bearer ${process.env.REACT_APP_GEMINI_API_KEY}`,  // Accessing API key from .env file
                }
            });

            const botMessage = { text: response.data.reply, sender: 'bot' };
            setMessages((prev) => [...prev, botMessage]);
        } catch (error) {
            console.error("Error sending message:", error);
            setError("There was an error communicating with the chatbot. Please try again.");
            setMessages((prev) => [...prev, { text: "Error communicating with the chatbot. Please try again.", sender: 'bot' }]);
        } finally {
            setLoading(false);
        }
    };

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="fixed bottom-4 right-4">
            <button
                className="bg-black text-white rounded-full p-3 shadow-lg hover:bg-blue-600 transition duration-300"
                onClick={toggleChat}
            >
                <FaComments />
            </button>
            {isOpen && (
                <div className="bg-white rounded-lg shadow-lg w-80 p-4 mt-2">
                    <div className="flex justify-between items-center">
                        <h3 className="font-semibold">Chatbot</h3>
                        <button className="text-gray-500" onClick={toggleChat}>X</button>
                    </div>
                    <div className="h-64 overflow-y-auto my-2">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`my-2 p-2 rounded ${msg.sender === 'user' ? 'bg-blue-100 text-left' : 'bg-gray-100 text-right'}`}
                            >
                                {msg.text}
                            </div>
                        ))}
                        {loading && <div className="text-center text-gray-500">Loading...</div>}
                        {error && <div className="text-center text-red-500">{error}</div>}
                    </div>
                    <div className="flex">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Type a message..."
                            className="flex-grow border rounded-l px-2 py-1"
                        />
                        <button
                            onClick={handleSend}
                            className="bg-blue-500 text-white rounded-r px-4 hover:bg-blue-600 transition duration-300"
                            disabled={loading} // Disable send button while loading
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
