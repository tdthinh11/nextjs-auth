'use client'
import { useRef, useState } from "react";
import { AiFillHome, AiOutlineSearch, AiOutlineHome } from "react-icons/ai";
import { BsFacebook, BsMessenger } from "react-icons/bs";
import { IoStorefrontOutline, IoStorefront, IoNotifications } from "react-icons/io5";
import { CgMenuGridO } from "react-icons/cg";
import { CgGames } from "react-icons/cg"
import Avatar from "../Avatar/Avatar";
import ProfileMenu from "./ProfileMenu";
import useClickOutSide from "@/hook/useClickOutSide";
import { IconGroupPeople } from "@/components/Icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PostList } from "@/constant/route";
import NotificationNumber from "../NotificationNumber/NotificationNumber";

export default function Header() {
  const [isShowProfileMenu, setIsShowProfileMenu] = useState<boolean>(false)
  const refFocus = useRef<HTMLDivElement>(null)
  const pathName = usePathname()
  console.log('path', pathName)

  // Attach the hook to the refFocus and close profile menu
  useClickOutSide(refFocus, () => setIsShowProfileMenu(false));

  return (
    <div className="header py-2 px-4 bg-white shadow-md fixed top-0 right-0 left-0 w-full z-10">
      <div className="header-left ml-4 flex items-center fixed top-0 left-0 z-20">
        <div className="flex items-center gap-2 h-full">
          <Link href='/'>
            <BsFacebook className="text-primary text-[40px]" />
          </Link>
          <div className="relative hidden sm:block">
            <AiOutlineSearch className="absolute text-[20px] top-[10px] left-[10px] text-gray-500" />
            <input
              className="bg-[#F0F2F5] p-2 rounded-full pl-9 outline-none placeholder:text-gray-500"
              type="text"
              placeholder="Search Facebook"
            />
          </div>
        </div>
      </div>

      <div className="header-center fixed top-0 right-0 left-0 z-10 bg-white w-[507px] mx-auto">
        <div className="flex items-center h-full justify-center gap-[100px] text-[30px] text-gray-500">
          <Link href='/' className="relative hover:cursor-pointer">
            {pathName === '/' ? <AiFillHome className="text-primary" /> : <AiOutlineHome />}
            {pathName === '/' && <div className="absolute bg-primary -left-[30px] h-[3px] w-[90px] -bottom-[16px]"></div>}
          </Link>
          <Link href={PostList.marketPlace} className="relative hover:cursor-pointer">
            {pathName.includes(PostList.marketPlace) ? <IoStorefront className="text-primary" /> : <IoStorefrontOutline />}
            {pathName.includes(PostList.marketPlace) && <div className="absolute bg-primary -left-[30px] h-[3px] w-[90px] -bottom-[16px]"></div>}
          </Link>
          <Link href={PostList.groups} className="relative hover:cursor-pointer">
            {pathName.includes(PostList.groups) ? <IconGroupPeople className="text-primary"/> : <IconGroupPeople/>}
            {pathName.includes(PostList.groups) && <div className="absolute bg-primary -left-[30px] h-[3px] w-[90px] -bottom-[16px]"></div>}
          </Link>
          <Link href={PostList.game} className="relative hover:cursor-pointer">
            {pathName.includes(PostList.game) ? <CgGames className="text-primary"/> : <CgGames/>}
            {pathName.includes(PostList.game) && <div className="absolute bg-primary -left-[30px] h-[3px] w-[90px] -bottom-[16px]"></div>}
          </Link>
        </div>
      </div>

      <div className="header-right mr-4 fixed right-0 top-0 z-30">
        <div className="flex items-center h-full gap-4">
          <div className="icon_wrapper text-[28px]">
            <CgMenuGridO />
          </div>
          <div className="icon_wrapper text-[20px]">
            <BsMessenger />
          </div>
          <div className="icon_wrapper text-[20px] relative">
            <IoNotifications />
            {/* <span className="absolute w-[19px] h-[19px] text-[13px] bg-[#E41E3F] text-white top-[-6px] right-[-5px] flex items-center justify-center rounded-full">2</span> */}
            <div className="absolute top-[-6px] right-[15px]">
              <NotificationNumber notifyNumber={2}/>
            </div>
          </div>
          <div className="relative" ref={refFocus}>
            <button onClick={() => setIsShowProfileMenu(prev => !prev)}>
              <Avatar />
            </button>
            {isShowProfileMenu && <ProfileMenu className="absolute top-12 right-4" />}
          </div>
        </div>
      </div>
    </div>
  )
}