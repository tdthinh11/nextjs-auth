import Login from "@/components/Login/Login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login 5a2054ac-3505-11ee-be56-0242ac120002',
}
export default function LoginPage() {
  return (
    <Login />
  )
}