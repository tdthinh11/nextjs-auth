interface IProtectedLayout {
  children: React.ReactNode
}

export default function ProtectedLayout({ children }: IProtectedLayout) {
  return <div>
    <main className="pb-7">{ children }</main>
  </div>
}