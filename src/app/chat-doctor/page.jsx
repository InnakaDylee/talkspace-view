import React from "react"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function page() {
  return (
    <>
    <div className="flex justify-center items-center w-full text-xl text-slate-800">
      Select a room to do Consultation
    </div>
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
    </>
  )
}

export default page
