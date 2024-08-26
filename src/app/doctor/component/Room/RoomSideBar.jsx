"use client"
import React, { useState } from "react"
import RoomCard from "./RoomCard"
import { useRoom } from "@context/RoomContext"

function RoomSideBarDoctor() {

  const { rooms, myRooms } = useRoom()

  return (
    <div className="overflow-y-scroll w-20 h-full border-r-2 sm:w-1/4 bg-blue-300 gap-2">
      <p className="px-2 pt-3 text-lg font-semibold sm:text-xl sm:px-5 text-slate-800">
        My Consultations
      </p>
      <div className="py-1">
        {myRooms.map((room, index) => {
          return (
            <RoomCard
              room={room}
              key={index}
            />
          )
        })}
      </div>
    </div>
  )
}

export default RoomSideBarDoctor
