"use client";

import ChatHeader from "@/component/Chat/ChatHeader";
import { useRouter, useParams } from "next/navigation";
import { getCookie } from "cookies-next";
import React, { useEffect, useState, useContext, useRef } from "react";
import { WebsocketContext } from "@context/socketProvide";

function ChatPage() {
  const { roomId } = useParams();
  const token = getCookie("token");
  const { conn } = useContext(WebsocketContext);
  const router = useRouter();
  const lastMessageRef = useRef(null);
  const [typing, setTyping] = useState("");
  const textarea = useRef(null)
  const [messageIds, setMessageIds] = useState(new Set()); // Track message IDs

  const [messages, setMessages] = useState([]);

  const handleSendMessage = (e) => {
    e.preventDefault()
    if(!textarea.current?.value) return;
    if(conn === null) {
      router.push('/chat-doctor')
      return
    }

    conn.send(textarea.current.value);
    textarea.current.value = '';
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault(); // Cegah baris baru jika Enter ditekan tanpa Shift
      handleSendMessage(event);
    }
  };

  useEffect(() => {
    if (!conn) {
      router.push("/doctor/chat");
      return;
    }

    conn.onmessage = (message) => {
      const parsedMessage = JSON.parse(message.data);
      // Update state if the message is new
      if (!messageIds.has(parsedMessage.created_at)) {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            createdAt: parsedMessage.created_at, // Use createdAt as unique identifier
            fullname: parsedMessage.username,
            text: parsedMessage.content,
            role: parsedMessage.role,
          },
        ]);

        // Update the set with the new message ID
        setMessageIds((prevIds) => new Set(prevIds.add(parsedMessage.created_at)));
      }

      // Scroll to the bottom when a new message arrives
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    

    // // Cleanup on unmount
    // return () => {
    //   if (conn) {
    //     conn.onmessage = null;
    //   }
    // };
  }, [conn, router]);

  return (
    <div className="flex flex-col w-full h-full bg-blue-200">
      <ChatHeader roomId={roomId} />
      {/* <ChatBody messages={messages} /> */}

      <div className="basis-[75vh] overflow-y-scroll p-5 w-full flex flex-col gap-2">
      {messages.map((message, index) => (
        <div key={index} className={`flex  ${message.role === "doctor" ? " bg-sky-700 self-end rounded-b-lg rounded-l-lg" : " bg-blue-400 self-start flex-col items-end rounded-b-lg rounded-r-lg"}`}>
          {message.text && (
            <div
              className={`flex justify-center items-center px-3 py-1 rounded-full ${
                message.role === "user" ? "bg-primary text-slate-900" : "text-teal-50"
              }`}
            >
              <p className="font-sans">{message.text}</p>
            </div>
          )}
          {message.image && <ChatImage imgURL={message.image} />}
        </div>
      ))}
      <div ref={lastMessageRef} className="mt-auto text-slate-500">
        {typing}
      </div>
    </div>
      {/* <ChatFooter roomId={roomId} /> */}

      <div className="basis-[8%] border-t-2 p-2 flex items-center gap-4">
        <div className="relative w-full">
          <div className="flex md:flex-row bg-grey md:mx-4 rounded-md gap-4">
            <div className="flex w-full rounded-md border border-blue">
              <textarea
                ref={textarea}
                placeholder="type your message here"
                className="w-full h-10 p-2 rounded-md focus:outline-none text-slate-800"
                style={{ resize: "none" }}
                onKeyDown={handleKeyDown}
              />
            </div>
            <div className="flex items-center">
              <button
                className="p-2 rounded-md bg-blue-600 text-slate-100"
                onClick={handleSendMessage}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
