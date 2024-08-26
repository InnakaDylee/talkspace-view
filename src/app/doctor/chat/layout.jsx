import RoomProvider from "@context/RoomContext"
import WebSocketProvider from "@context/socketProvide"
import HeaderDoctor from "../component/Header"
import RoomSideBarDoctor from "../component/Room/RoomSideBar"
export default function RoomLayout({ children }) {
  return (
    <RoomProvider>
      <WebSocketProvider>
        <HeaderDoctor />
        <div className="flex h-[90vh] bg-slate-200">
          <RoomSideBarDoctor />
          {children}
        </div>
      </WebSocketProvider>
    </RoomProvider>
  )
}
