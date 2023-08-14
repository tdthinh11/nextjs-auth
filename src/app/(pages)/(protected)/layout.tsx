'use client'
import Header from "@/components/Header/Header";
import { AuthRoutes } from "@/constant/route";
import { useAuthContext } from "@/context/AuthContext";
import { redirect } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

interface IProtectedLayout {
  children: React.ReactNode
}

export default function ProtectedLayout({ children }: IProtectedLayout) {
  const auth = useAuthContext()
  const [isLoading, setIsLoading] = useState(true)

  const loadJWT = useCallback(async () => {
    try {
      setIsLoading(true)
      const token = localStorage.getItem('token')
      const jwt = token ? JSON.parse(token) : ''
      auth?.updateAuthState({
        accessToken: jwt.accessToken || null,
        authenticated: jwt.accessToken !== undefined && jwt.accessToken !== null
      })
    } catch (error) {
      auth?.updateAuthState({
        accessToken: undefined,
        authenticated: undefined
      })
    }
    setIsLoading(false)
  }, [])

  useEffect(() => {
    loadJWT()
  }, [loadJWT])

  if (!auth?.authState.authenticated && !isLoading) return redirect(AuthRoutes.login)

  return <div className="flex flex-col">
    <Header />
    <main className="pb-7">{ children }</main>
  </div>
}