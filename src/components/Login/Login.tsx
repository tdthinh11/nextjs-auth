"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useAuthContext } from "@/context/AuthContext";
import ButtonLoading from "../ButtonLoading/ButtonLoading";

export default function Login() {
  const router = useRouter();
  const auth = useAuthContext()
  const [user, setUser] = React.useState({
    email: "",
    password: ""
  })
  const [buttonDisabled, setButtonDisabled] = React.useState(true);
  const [loading, setLoading] = React.useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post("/api/users/login", user);

      if (data.success) {
        console.log('data', data)
        auth?.updateAuthState({
          accessToken: data.data.access_token,
          authenticated: true
        })
        router.push("/");
      }
    } catch (error: any) {
      // error
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div
      className="flex justify-center items-center h-screen w-screen"
      style={{
        backgroundImage: 'url("./nature.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div
        className="full-screen-container flex flex-col justify-center py-8 px-7 mx-auto w-1/2 min-w-[400px] max-w-[600px]"
        style={{
          backgroundColor: 'hsla(201, 100%, 6%, 0.5)'
        }}
      >
        <h1 className="text-center text-white mb-5 text-3xl tracking-widest">Welcome</h1>
        <label htmlFor="email" className="text-white font-extralight">Email</label>
        <input
          className="p-2 border bg-[#849194] border-black rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-white font-thin"
          id="email"
          type="text"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder=""
        />
        <label htmlFor="password" className="text-white font-extralight">Password</label>
        <input
          className="p-2 border bg-[#849194] border-black rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-white font-thin"
          id="password"
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder=""
        />
        <button
          className={`px-2 py-3 rounded-md outline-none hover:bg-[rgba(63,110,136,0.4)] text-xl font-light ${buttonDisabled ? 'pointer-events-none text-gray-400' : 'text-white'}`}
          style={{
            border: '1px solid hsl(201, 100%, 50%)'
          }}
          onClick={onLogin}
        >
          <div className="flex items-center justify-center relative">
            {loading && <div className="absolute left-1">
              <ButtonLoading />
            </div>}
            <span>Login</span>
          </div>
        </button>
        <div className="inline-flex justify-end mt-2">
          <Link href="/sign-up" className="hover:underline text-right text-white">Sign Up</Link>
        </div>
      </div>
    </div>
  )
}