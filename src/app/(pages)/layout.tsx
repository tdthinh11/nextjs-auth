interface IProtectedLayout {
  children: React.ReactNode
}

export default function ProtectedLayout({ children }: IProtectedLayout) {
  return <div>
    <main>{ children }</main>
  </div>
}