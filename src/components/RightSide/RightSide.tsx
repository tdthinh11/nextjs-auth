import LeftSidebarLink from "@/components/LeftSide/LeftSidebarLink";
import { BsChevronDown } from "react-icons/bs";
import Friend from "@/asset/img/friends.png"
import Group from "@/asset/img/group.png"
import Market from "@/asset/img/market.png"
import Save from "@/asset/img/save.png"
import Pages from "@/asset/img/pages.png"
import Events from "@/asset/img/events.png"
import MostRecent from "@/asset/img/most_recent.png"

export default function RightSide() {
  return (
    <div className="min-w-[280px] max-w-[360px] basis-360px">
      <div className="px-4 fixed mt-5 lg:block flex flex-col justify-between">
        <div className="flex flex-col gap-2">
          <LeftSidebarLink image={Friend} text="Friends" />
          <LeftSidebarLink image={Group} text="Groups" />
          <LeftSidebarLink image={Market} text="Marketplace" />
          <LeftSidebarLink image={Save} text="Saved" />
          <LeftSidebarLink image={Pages} text="Pages" />
          <LeftSidebarLink image={Events} text="Events" />
          <LeftSidebarLink image={MostRecent} text="Most Recent" />
          <div className="flex items-center gap-3 w-[300px] py-2 pl-1 cursor-pointer hover:bg-gray-300">
            <div className="bg-gray-300 h-[30px] w-[30px] grid place-items-center rounded-full">
              <BsChevronDown />
            </div>
            <h1 className="text-[16px] font-medium">See More</h1>
          </div>
          <p className="text-xs text-gray-500 mt-2">Privacy · Terms · Advertising · Ad choices · Cookies · <br /> Meta © 2023</p>
        </div>
      </div>
    </div>
  );
}