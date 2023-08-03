"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from 'axios';

export default function SignUp() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  })
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
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
    <div className="flex flex-col justify-center min-h-screen py-2 w-96 mx-auto">
      {loading ? (
        <h1 className="text-left mb-5">Processing</h1>
      ) : (
        <h1 className="text-left mb-5 text-2xl font-bold">Sing Up</h1>
      )}

      <label htmlFor="username">Username</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        id="username"
        type="text"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="Username"
      />
      <label htmlFor="email">Email</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        id="email"
        type="text"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="Email"
      />
      <label htmlFor="password">Password</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        id="password"
        type="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="Password"
      />
      <button
        onClick={onSignUp}
        className={`p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none hover:bg-slate-200 duration-200 focus:border-gray-600 ${buttonDisabled ? 'pointer-events-none' : ''}`}>Sign up</button>
      <div className="inline-flex justify-end">
        <Link href="/login" className="hover:underline">Login</Link>
      </div>
    </div>
  )
}