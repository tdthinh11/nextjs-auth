'use client'
import { useAuthContext } from "@/context/AuthContext"
import { useCallback } from "react"
import { RiLogoutBoxRFill } from "react-icons/ri"
// import "./style.css"

interface ProfileMenu {
  className?: string
}

export default function ProfileMenu({className} : ProfileMenu) {
  const auth = useAuthContext()
  const handleLogout = useCallback(() => {
    auth?.logout()
  }, [auth])

  return <div className={`menu-post-item w-40 bg-white ${className}`}>
    <button
      className="flex items-center gap-4 hover:bg-slate-100 p-3 hover:cursor-pointer w-full"
      onClick={handleLogout}
    >
      <div>
        <RiLogoutBoxRFill />
      </div>
      <span>
        Logout
      </span>
    </button>
  </div>
}