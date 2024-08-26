"use client"
import React, { useState } from "react"
import RoomCard from "./RoomCard"


import { BiMessageAdd } from "react-icons/bi"
import AddRoomPanel from "./AddRoomPanel"
import Image from "next/image"
import { useRoom } from "@context/RoomContext"
import { useSocket } from "@context/SocketContext"

function RoomSideBarDoctor() {

  const { rooms, myRooms } = useRoom()
  const { roomUsers } = useSocket()

  return (
    <div className="overflow-y-scroll w-20 h-full border-r-2 sm:w-1/4 bg-blue-300 gap-2">
      {/* <p className="px-2 py-5 sm:px-5 h-[56px] text-xl sm:text-2xl font-semibold text-slate-800">
        Doctor Available
      </p>
      {rooms.map((room, index) => {
        // console.log(room)
        return (
          <div key={room.id} className="flex group relative gap-3 items-center p-2 flex-col sm:flex-row bg-slate-100 rounded-xl mx-4 px-2 my-3 cursor-pointer"
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
              <p className="font-medium line-clamp-1 text-slate-800">{room.name}</p>
            </div>
            <div>
            </div>
          </div>
        )
      })} */}
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
    </div>
  )
}

export default RoomSideBarDoctor
