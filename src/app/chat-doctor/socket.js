"use client";

import { getCookie } from "cookies-next";
import { io } from "socket.io-client";

const token = getCookie('token')
console.log('Token:', token);

export const socket = io("http://54.251.30.252:8000", {
  // transports: ['websocket'],
  path: "/consultations/joinRoom/35b08271-4407-452b-b78d-b1e142e72373",
  auth: {
    token: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTcyMzA0Mzg4MSwiZXhwIjoxNzIzMDc5ODgxfQ.IL7mBpm4cbx4jzW5jcz3fiHJmwVKslL1tmOMs4Aiq4k`
  },
  extraHeaders: {
        Authorization: `Bearer ${token}`,
      },
  
  // auth: {
  //   "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE3MjQ2Nzg3NDEsImlkIjoiMzI2ZTk4NmUtNTMzMi00OWUzLWFhZjYtN2Q0OWUxNjcwNTlkIiwicm9sZSI6InVzZXIifQ.3KGV4K4_Qf-fQRtgp8_AqQe-RcLZA-84OjftjNMcy7U`
  // }
    // withCredentials: true
});

// export const  socket = io('http://54.251.30.252:8000', {
//   path: "/consultations/joinRoom/35b08271-4407-452b-b78d-b1e142e72373",
//   extraHeaders: {
//     Authorization: token,
//   },
//   transports: ['websocket'],  // Menggunakan transportasi WebSocket secara langsung
// });

// export default socket;