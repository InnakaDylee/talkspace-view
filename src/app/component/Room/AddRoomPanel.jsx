"use client";
import { useRoom } from "@context/RoomContext"
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AiFillCloseCircle } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";
import createRoom from "@/api/user/chat/createRoom";
import { getCookie } from "cookies-next";
import { toast } from "react-toastify";

function AddRoomPanel({ hideAddRoomPanel, id }) {
  const { rooms } = useRoom();  
  const room = rooms.find((room) => room.id === id); 
  const doctorName = room ? room.name : "Unknown";  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await createRoom(
      {
        doctor_id: id
      }, getCookie('token')
      )
      console.log(res)
      if(res.status){
        window.location.reload()
      }else{
        toast.error(res.message, {
          position: "top-center",
          autoClose: 4500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          className:" capitalize"
          });
      }
    }
    catch (err) {

    }
    hideAddRoomPanel(true);
    // router.replace("/chat-doctor/" + id);
  };

  return (
    <div
      className="flex absolute top-0 left-0 z-20 flex-col justify-center items-center px-6 py-8 mx-auto w-full h-screen backdrop-blur-sm lg:py-0"
      onClick={() => hideAddRoomPanel(true)}
    >
      <div
        className="relative w-full bg-white rounded-lg shadow-lg md:mt-0 sm:max-w-md xl:p-0"
        onClick={(e) => e.stopPropagation()}
      >
        <AiFillCloseCircle
          size={30}
          className="absolute -top-2 -right-2 cursor-pointer text-primary"
          onClick={() => hideAddRoomPanel(true)}
        />
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold tracking-tight leading-tight text-gray-900 md:text-2xl">
            Start consultation with doctor
          </h1>
          <p className=" text-lg font-bold tracking-tight leading-tight text-gray-900" >{doctorName}</p>

          <form className="space-y-4 md:space-y-6">
            <button type="submit" className=" bg-purple-400 rounded-lg px-4 py-2 text-slate-100" 
              onClick={handleSubmit}>
              Join Room
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddRoomPanel;
