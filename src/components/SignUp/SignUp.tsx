"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from 'axios';
import ButtonLoading from "../ButtonLoading/ButtonLoading";

export default function SignUp() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  })
  const [buttonDisabled, setButtonDisabled] = React.useState(true);
  const [loading, setLoading] = React.useState(false);

  const onSignUp = async () => {
    try {
      setLoading(true);
      await axios.post("/api/users/signup", user);
      router.push("/login");
    } catch (error: any) {
      // error
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);


  return (
    <div
      className="flex justify-center items-center h-screen w-screen"
      style={{
        backgroundImage: 'url("./background_image.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
      <div
        className="full-screen-container flex flex-col justify-center py-8 px-7 mx-auto w-1/2 min-w-[400px] max-w-[600px]"
        style={{
          backgroundColor: 'hsla(201, 100%, 6%, 0.5)'
        }}>
        <h1 className="text-center text-white mb-5 text-3xl tracking-widest">Sing Up</h1>
        <label htmlFor="username" className="text-white font-extralight">Username</label>
        <input
          className="p-2 border bg-[#849194] border-black rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-white font-thin"
          id="username"
          type="text"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder=""
        />
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
          onClick={onSignUp}
        >
          <div className="flex items-center justify-center relative">
            {loading && <div className="absolute left-1">
              <ButtonLoading />
            </div>}
            <span>Sign up</span>
          </div>
        </button>
        <div className="inline-flex justify-end mt-2">
          <Link href="/login" className="hover:underline text-right text-white">Login</Link>
        </div>
      </div>
    </div>
  )
}