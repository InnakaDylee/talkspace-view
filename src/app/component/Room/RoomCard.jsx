import { getCookie } from "cookies-next";
import { useRoom } from "../../../contexts/RoomContext";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter,  } from "next/navigation";
import React, {useContext} from "react";
// import Avatar from "react-avatar";
import { WebsocketContext } from "@context/socketProvide";


function RoomCard({ room, users }) {
  const { roomId } = useParams();
  const { myRooms, setMyRooms } = useRoom();
  const router = useRouter();
  const token = getCookie('token')
  const { setConn } = useContext(WebsocketContext)

  const joinRoom = (roomId) => {
    const ws = new WebSocket(
      `${process.env.NEXT_PUBLIC_WS}/consultations/joinRoom/${roomId}/${token}`
    )
    if (ws.OPEN) {
      setConn(ws)
      router.push(`/chat-doctor/${roomId}`)
      return
    }
  }

  return (
    <div
      // href={`/chat-doctor/${room.id}`}
      // onClick={() => router.push(`/chat-doctor/${room.id}`)}
      onClick={() => joinRoom(room.id)}
      className={`flex group relative gap-3 items-center p-2 flex-col sm:flex-row bg-purple-500 rounded-xl mx-4 px-2 my-3 cursor-pointer ${room.id === roomId ? "bg-gray-100" : ""
        }`}
    >
      <div>
        {/* {room.id === "1" ? ( */}
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
        {/* ) : (
          <ImExit
            name={room.title}
            round={true}
            size="50"
            className="text-sm"
          />
        )} */}
      </div>
      <div className="hidden sm:block">
        <p className="font-medium line-clamp-1">{room.name}</p>
        {/* <p className="text-sm text-slate-200">
          <span className="text-xs">🟢</span> online
        </p> */}
      </div>
    </div>
  );
}

export default RoomCard;
