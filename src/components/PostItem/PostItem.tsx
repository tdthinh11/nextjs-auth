'use client'
import { AiOutlineLike } from "react-icons/ai"
import { BiComment } from "react-icons/bi"
import { PiShareFatThin } from "react-icons/pi"
import { BsThreeDots } from "react-icons/bs"
import Avatar from "../Avatar/Avatar"
import MenuItem from "../MenuItem/MenuItem"

interface IPostItem {
  isVisible: boolean
  // closeMenuItem?: (param: boolean) => void
}

export default function PostItem({ isVisible }: IPostItem) {
  return <div className="p-4 mt-5 border bg-white shadow-small-shadow rounded-sm">
    <div className="flex items-center">
      <Avatar />
      <div className="grow">
        <div className="text-sm font-semibold flex justify-between items-center relative">
          <span>Name</span>
          <button className="hover:cursor-pointer">
            <BsThreeDots />
          </button>
          {isVisible && <MenuItem />}
        </div>
        <p className="text-xs font-medium text-gray-500">10m</p>
      </div>
    </div>
    <div className="min-h-[100px] mt-5 mb-4">
      Vietnamese gave up Chinese characters (chữ Hán) and Classical Chinese (Hán văn) because it was too impractical and because of the French colonial rule. The French abolished the Confucian court examination in 1920 which in turn caused Classical Chinese and Chinese characters to fall into disuse. Here are some pictures of a Confucian court examination in Vietnam.
    </div>
    <div className="border-t">
      <div className="flex justify-between mt-2">
        <button className='flex items-center gap-1'>
          <AiOutlineLike />
          <span>Like</span>
        </button>
        <button className='flex items-center gap-1'>
          <BiComment />
          <span>Comment</span>
        </button>
        <button className='flex items-center gap-1'>
          <PiShareFatThin />
          <span>Share</span>
        </button>
      </div>
    </div>
  </div>
}