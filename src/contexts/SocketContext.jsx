"use client";
import { createContext, useContext, useEffect, useState } from "react";
import * as socketIO from "socket.io-client";
import { useUser } from "./UserContext";
import { useRouter, useParams } from "next/navigation";
import { getCookie } from "cookies-next";

const intialData = {
  socket: undefined,
  roomUsers: {},
  messages: {}
};

const SocketContext = createContext(intialData);

export function useSocket() {
  return useContext(SocketContext);
}

export default function SocketProvider({ children }) {
  const [roomUsers, setRoomUsers] = useState({});
  const [socket, setSocket] = useState();
  const [messages, setMessages] = useState({});

  const { username } = useUser();
  const router = useRouter();
  const { id } = useParams();
  const token = getCookie("token");

  // useEffect(() => {
  //   if (!token) {
  //     router.replace("/");
  //     return;
  //   }

  //   const socket = socketIO.connect(`${process.env.NEXT_PUBLIC_HOST}/consultations/joinRoom/0109bb5f-3453-4674-92c7-958b1a5a7bb2`, {
  //     extraHeaders: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });

  //   socket.on("connect", () => {
  //     console.log("Socket connected successfully.");
  //   });

  //   socket.on("connect_error", (err) => {
  //     console.error("Socket connection error:", err.message);
  //     router.replace("/");
  //   });

  //   socket.on("receive_message", (data) => {
  //     setMessages((prev) => {
  //       const newMessages = { ...prev };
  //       newMessages[data.roomId] = [...(newMessages[data.roomId] ?? []), data];
  //       return newMessages;
  //     });
  //   });

  //   socket.on("users_response", (data) => setRoomUsers(data));

  //   setSocket(socket);

  //   return () => {
  //     socket.disconnect();
  //   };
  // }, [id, token, username, router]);

  return (
    <SocketContext.Provider value={{ socket, roomUsers, messages }}>
      {children}
    </SocketContext.Provider>
  );
}
