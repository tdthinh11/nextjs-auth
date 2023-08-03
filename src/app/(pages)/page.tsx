import Feed from "@/components/Feed/Feed";
import LeftSide from "@/components/LeftSide/LeftSide";
import RightSide from "@/components/RightSide/RightSide";

export default function Home() {
  return (
    <main className="mx-auto mt-20 flex justify-between">
      <LeftSide />
      <Feed />
      <RightSide />
    </main>
  )
}
