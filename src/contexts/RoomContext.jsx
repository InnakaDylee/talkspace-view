"use client"
import getAllDoctors from "@/api/user/chat/getAllDoctors";
import getMyRooms from "@/api/user/chat/getMyRooms";
import { getCookie } from "cookies-next";
import { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { jwtDecode } from "jwt-decode";

const intialData = {
  rooms: [],
  myRooms: [],
  setMyRooms: () => {}
}

const RoomContext = createContext(intialData)

export function useRoom() {
  return useContext(RoomContext)
}

export default function RoomProvider({ children }) {
  const [rooms, setRooms] = useState([])
  const [myRooms, setMyRooms] = useState([])
  const pathname = usePathname();
  console.log(pathname)

  useEffect(() => {
    // Fetch rooms and myRooms data when visiting /chat-doctor path
    if (pathname === "/chat-doctor" || pathname === "/doctor/chat") {
      fetchRoomsFromServer();
      fetchMyRooms();
    }
  }, [pathname]);

  useEffect(() => {
    updateMyRooms()
  }, [myRooms])

  async function fetchRoomsFromServer() {
    console.log('cek')
    const res = await getAllDoctors(getCookie('token'))
    if(res.status) {
      if(res.data === undefined) return;
      const transformedRooms = Object.keys(res.data).map(key => {
        const room = res.data[key];
        const profilePicture = room.profilePicture	 || room.user_profile_picture || room.doctor_profile_picture;
        return {
          key,
          id: room.id,
          name: room.fullname,  // Assuming fullname is what you mean by name
          profilePicture: profilePicture
        };
      });
  
      // Update the state with the transformed data
      setRooms(transformedRooms);
    }
    // const rooms = await response.json()
    // setRooms(rooms)
  }

  async function fetchMyRooms() {
    const roleDecoded = jwtDecode(getCookie('token')).role
    const res = await getMyRooms(getCookie('token'))
    if(res.status) {
      if(res.data === undefined) return;
      const transformedRooms = Object.keys(res.data).map(key => {
        const room = res.data[key];
        const  fullName = roleDecoded === 'user' ? room.doctor_name : roleDecoded === 'doctor'? room.user_name : room.fullname
        // const profilePicture = room.profilePicture	 || room.user_profile_picture || room.doctor_profile_picture;
        const profilePicture = roleDecoded === 'user' ? room.doctor_profile_picture : roleDecoded === 'doctor'? room.user_profile_picture : room.profilePicture
        // const fullname = room.fullname || room.doctor_name || room.user_name
        return {
          key,
          id: room.id,
          name: fullName,  // Assuming fullname is what you mean by name
          profilePicture: profilePicture
        };
      });
      setMyRooms(transformedRooms);
    }

    // const myRooms = localStorage.getItem("myRooms")
    // if (myRooms) setMyRooms(JSON.parse(myRooms))
    // else setMyRooms([])
  }

  function updateMyRooms() {
    localStorage.setItem("myRooms", JSON.stringify(myRooms))
  }

  return (
    <RoomContext.Provider value={{ rooms, myRooms, setMyRooms }}>
      {children}
    </RoomContext.Provider>
  )
}
