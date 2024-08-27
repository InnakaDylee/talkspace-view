"use client"
import { useRoom } from "@context/RoomContext";
import { WebsocketContext } from "@context/socketProvide";
import React, { useContext } from "react"
import { ImExit } from "react-icons/im";

function ChatHeader({ roomId }) {
  const { myRooms } = useRoom()
  const room = myRooms.find(room => room.id === roomId)
  const { conn, setConn } = useContext(WebsocketContext);

  const handleCloseConnection = (e) => {
    e.preventDefault();

    if (conn) {
      conn.close(); // Menutup koneksi WebSocket
      setConn(null); // Memastikan state koneksi direset
    }
  };
  return (
    <div className="basis-[7%] border-b-2 flex items-center justify-between p-3 font-medium pt-4">
      {
        room?.profilePicture &&
        <img
          src={room?.profilePicture}
          alt="Profile"
          className="w-12 h-12 object-cover rounded-full"
        />
      }
      <p className="text-xl text-slate-700">{room?.name}</p>
        <div
          className=" right-3 justify-center items-center p-2 bg-red-500 rounded-full group-hover:flex hover:bg-red-700"
          onClick={handleCloseConnection}
        >
          <ImExit className="text-white" />
        </div>
    </div>
  )
}

export default ChatHeader
