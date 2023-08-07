import SignUp from "@/components/SignUp/SignUp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Sign up',
  description: 'Sign up 780d02b2-3505-11ee-be56-0242ac120002',
}
export default function SignUpPage() {
  return (
    <SignUp />
  )
}