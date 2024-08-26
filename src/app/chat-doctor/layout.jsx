import RoomSideBar from "@/component/Room/RoomSideBar"
import RoomProvider from "../../contexts/RoomContext"
import WebSocketProvider from "@context/socketProvide"
import HeaderHome from "@/component/home-page/HeaderHome"


export default function RoomLayout({ children }) {


  return (
    <RoomProvider>
      <WebSocketProvider>
        <HeaderHome />
        <div className="flex h-[90vh] mt-[4%] bg-slate-200">
          <RoomSideBar />
          {children}
        </div>
      </WebSocketProvider>
    </RoomProvider>
  )
}
