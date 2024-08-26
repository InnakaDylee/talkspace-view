import RoomSideBar from "@/component/Room/RoomSideBar"
import RoomProvider from "../../contexts/RoomContext"
import WebSocketProvider from "@context/socketProvide"
import HeaderHome from "@/component/home-page/HeaderHome"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function RoomLayout({ children }) {


  return (
    <RoomProvider>
      <WebSocketProvider>
        <HeaderHome />
        <div className="flex h-[90vh] mt-[4%] bg-slate-200">
          <RoomSideBar />
          {children}
          <ToastContainer
            position="top-center"
            autoClose={4500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          // transition: Zoom,
          />
        </div>
      </WebSocketProvider>
    </RoomProvider>
  )
}
