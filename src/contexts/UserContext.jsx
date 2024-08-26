"use client"
import { createContext, useContext, useState, useEffect } from "react"
import { jwtDecode } from "jwt-decode"

const initialData = {
  fullname: "",
  id: "",
  premium: false,
  setUserData: () => {}
}

const UserContext = createContext(initialData)

export function useUser() {
  const context = useContext(UserContext)
  return context
}

export default function UserProvider({ children }) {
  const [fullname, setFullname] = useState("")
  const [id, setId] = useState("")
  const [premium, setPremium] = useState(false)

  const setUserData = (data) => {
    const { fullname, id, premium } = data
    setFullname(fullname)
    setId(id)
    setPremium(premium)
    localStorage.setItem("fullname", fullname)
    localStorage.setItem("id", id)
    localStorage.setItem("premium", premium)
  }

  useEffect(() => {
    const storedFullname = localStorage.getItem("fullname")
    const storedId = localStorage.getItem("id")
    const storedPremium = localStorage.getItem("premium")

    if (storedFullname && storedId && storedPremium !== null) {
      setFullname(storedFullname)
      setId(storedId)
      setPremium(storedPremium)
    }
  }, [])

  return (
    <UserContext.Provider
      value={{
        fullname,
        id,
        premium,
        setUserData
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
