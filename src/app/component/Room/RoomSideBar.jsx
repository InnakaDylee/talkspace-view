"use client"
import React, { useState } from "react"
import RoomCard from "./RoomCard"
import { useRoom } from "../../../contexts/RoomContext"
import { useSocket } from "../../../contexts/SocketContext"
import { BiMessageAdd } from "react-icons/bi"
import AddRoomPanel from "./AddRoomPanel"
import Image from "next/image"

function RoomSideBar() {
  const [showAddRoomPanel, setShowAddRoomPanel] = useState(false)
  const [selectedRoomId, setSelectedRoomId] = useState(null)
  const { rooms, myRooms } = useRoom()
  const { roomUsers } = useSocket()

  const hideAddRoomPanel = () => setShowAddRoomPanel(false)
  const handleRoomClick = (roomId) => {
    setSelectedRoomId(roomId)
    setShowAddRoomPanel(true)
  }

  return (
    <div className="overflow-y-scroll w-20 h-full border-r-2 sm:w-1/4 bg-purple-300 gap-2">
      <p className="px-2 py-5 sm:px-5 h-[56px] text-xl sm:text-2xl font-semibold text-slate-800">
        Doctor Available
      </p>
      {rooms.map((room, index) => {
        // console.log(room)
        return (
          <div key={room.id} className="flex group relative gap-3 items-center p-2 flex-col sm:flex-row bg-purple-500 rounded-xl mx-4 px-2 my-3 cursor-pointer"
            onClick={() => handleRoomClick(room.id)}
          >
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
            <div className="hidden sm:block">
              <p className="font-medium line-clamp-1">{room.name}</p>
            </div>
            <div>
            </div>
          </div>
        )
      })}
      <p className="px-2 pt-3 text-lg font-semibold sm:text-xl sm:px-5 text-slate-800">
        My Consultations
      </p>
      <div className="py-1">
        {myRooms.map((room, index) => {
          // console.log(room)
          return (
            <RoomCard
              room={room}
              users={roomUsers[room.id] ?? []}
              key={index}
            />
          )
        })}
      </div>
      {
        showAddRoomPanel && (
          <div>
            <AddRoomPanel hideAddRoomPanel={hideAddRoomPanel} id={selectedRoomId} />
          </div>
        )
      }

    </div>
  )
}

export default RoomSideBar
