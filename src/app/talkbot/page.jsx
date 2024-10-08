"use client"

import React, { useEffect, useState, useRef } from "react";
import Footer from "../component/Footer";
import Header from "../component/home-page/HeaderHome"

import { FaStethoscope, FaRobot } from "react-icons/fa";
import Slider from "react-slick";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import talkbots from "../api/user/chat/talkbot";
import { getCookie } from "cookies-next";
// import ChatComponent from "@/component/chat/chat";

const Talkbot = () => {

  const lastMessageRef = useRef(null);
  const [typing, setTyping] = useState("");
  const [isInputDisabled, setIsInputDisabled] = useState(false);

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (input.trim()) {
      const updatedMessages = [...messages, { text: input, user: 'User' }];
      setMessages(updatedMessages);
      setInput('');
      setIsInputDisabled(true); // Disable input saat menunggu respons
      // Here, you can add the logic to send the message to your AI model or backend.
      try {
        const res = await talkbots({ message: input }, getCookie('token'))
        if (res.status) {
          setMessages([...updatedMessages, { text: res.data, user: 'Talkbot' }])
        }
      } catch (err) {
        setInput(input); // Kembalikan input jika terjadi error
      } finally {
        setIsInputDisabled(false); // Aktifkan input setelah mendapatkan respons atau error
      }
    }
    return;
  };

  useEffect(() => {
    const startChat = async () => {
      const token = getCookie('token');

      try {
        const res = await talkbots({ message: 'start' }, token);
        if (res.status) {
          // Tambahkan pesan inisiasi dari API ke messages
          setMessages([{ text: res.data, user: 'Talkbot' }]);
        }
      } catch (err) {
        console.error('Error:', err);
        // Tangani kesalahan jika ada
      }
    };

    // Panggil startChat jika messages kosong
    if (messages.length === 0) {
      startChat();
    }
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);



  return (
    <div className="flex flex-col h-screen justify-end bg-slate-200">
      <Header />
      <div className="flex flex-col justify-end h-[82vh] w-[65vw] bg-purple-400 rounded-lg p-4 mx-auto">
        <div className="flex flex-col overflow-y-auto space-y-4 mb-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.user === 'User' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`p-4 rounded-lg max-w-xs break-words ${message.user === 'User'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-300 text-black'
                  }`}
                  style={{ 
                    lineHeight: '1.4', 
                    padding: '16px',
                    fontSize: '16px',
                    fontFamily: 'Arial, sans-serif',
                  }}
              >
                {message.text}
              </div>
            </div>
          ))}
          <div ref={lastMessageRef} />
        </div>
      </div>
      <div className=" self-center p-4 bg-white flex items-end w-[65vw] rounded-lg">
        <input
          type="text"
          className="flex-1 border border-purple-300 rounded-lg p-2 mr-4 text-slate-800 focus:border-purple-700 focus:border-2 outline-none"
          placeholder="Type your message..."
          value={input}
          autoFocus
          disabled={isInputDisabled} // Disable button jika sedang menunggu respons
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') sendMessage();
          }}
        />
        <button
          className=" bg-purple-700 text-white p-2 rounded-lg"
          onClick={sendMessage}
          disabled={isInputDisabled} // Disable button jika sedang menunggu respons
        >
          Send
        </button>
      </div>

      {/* </div> */}
      {/* </div>    */}
      {/* <Footer /> */}
    </div>
  );
}

export default Talkbot;