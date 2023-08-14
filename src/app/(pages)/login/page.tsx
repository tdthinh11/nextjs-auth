import Login from "@/components/Login/Login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Login Facebook',
  description: `https://nextjs-auth-plum.vercel.app. Vercel Documentation. Vercel's frontend cloud gives developers frameworks, workflows, and infrastructure to build a faster, more personalized web. 5a2054ac-3505-11ee-be56-0242ac120002 `,
  applicationName: 'Facebook clone',
  authors: [{
    name: 'nuPharma', url: 'https://www.nupharma24.com'
  }],
  publisher: 'Vercel',
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  alternates: { canonical: "https://www.nupharma24.com" },
  keywords: `Vercel Documentation. Vercel's frontend cloud gives developers frameworks, workflows, and infrastructure to build a faster, more personalized web. 5a2054ac-3505-11ee-be56-0242ac120002 nuPharma `
}
export default function LoginPage() {
  return <div>
    <Login />
  </div>
}