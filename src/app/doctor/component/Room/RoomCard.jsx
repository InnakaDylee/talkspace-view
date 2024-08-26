import { getCookie } from "cookies-next";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter, } from "next/navigation";
import React, { useContext } from "react";
// import Avatar from "react-avatar";
import { ImExit } from "react-icons/im";
import { WebsocketContext } from "@context/socketProvide";
import { useRoom } from "@context/RoomContext";


function RoomCard({ room, users }) {
  const { roomId } = useParams();
  const { myRooms, setMyRooms } = useRoom();
  const router = useRouter();
  const token = getCookie('token')
  const { conn, setConn, } = useContext(WebsocketContext)

  const joinRoom = (roomId) => {
    // if (conn && conn.readyState === WebSocket.OPEN) {
    //   console.log('Connection is already open.');
    //   conn.close();
    //   // setConn(null)
    //   return;
    // }
  
    // if (conn && conn.readyState === WebSocket.CONNECTING) {
    //   console.log('Connection is still in the process of connecting.');
    //   conn.close()
    //   // setConn(null)
    //   return;
    // }
    if(conn){
      conn.close()
    }
    const ws = new WebSocket(
      `${process.env.NEXT_PUBLIC_WS}/consultations/joinRoom/${roomId}/${token}`
    )
    if (ws.OPEN) {
      setConn(ws)
      router.push(`/doctor/chat/${roomId}`)
      return
    }
    ws.onopen = () => {
      console.log('Connection established.');
      // setConn(ws);
      // router.push(`/doctor/chat/${roomId}`);
    };
  
    ws.onclose = () => {
      console.log('Connection closed.');
    };
  
    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };
  }

  return (
    <div
      onClick={() => joinRoom(room.id)}
      className={`flex group relative gap-3 items-center p-2 flex-col sm:flex-row bg-slate-100 rounded-xl mx-4 px-2 my-3 cursor-pointer ${room.id === roomId ? "bg-gray-100" : ""
        }`}
    >
      <div>
        {
          room.profilePicture &&
          <Image
            src={room.profilePicture}
            height={50}
            width={50}
            style={{
              objectFit: "cover",
              height: 50,
              width: 50,
              borderRadius: 50,
            }}
            alt="profile"
          />
        }
      </div>
      <div className="hidden sm:block">
        <p className="font-medium line-clamp-1 text-slate-800">{room.name}</p>
      </div>
    </div>
  );
}

export default RoomCard;
