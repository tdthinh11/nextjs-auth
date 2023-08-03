import Header from "@/components/Header/Header"

interface IProtectedLayout {
  children: React.ReactNode
}

export default function ProtectedLayout({ children }: IProtectedLayout) {
  return <div>
    <Header />
    <main>{ children }</main>
  </div>
}