import SignUp from "@/components/SignUp/SignUp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Sign up',
  description: 'Sign up 780d02b2-3505-11ee-be56-0242ac120002',
  applicationName: 'Facebook clone',
  authors: [{
    name: 'nuPharma', url: 'https://www.nupharma24.com'
  }],
  publisher: 'Vercel',
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  alternates: { canonical: "https://www.nupharma24.com" },
  keywords: 'Sign up 780d02b2-3505-11ee-be56-0242ac120002 nuPharma'
}
export default function SignUpPage() {
  return (
    <SignUp />
  )
}