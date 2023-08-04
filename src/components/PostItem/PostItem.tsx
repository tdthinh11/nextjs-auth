'use client'
import { AiOutlineLike } from "react-icons/ai"
import { BiComment } from "react-icons/bi"
import { PiShareFatThin } from "react-icons/pi"
import { BsThreeDots } from "react-icons/bs"
import Avatar from "../Avatar/Avatar"
import MenuItem from "../MenuItem/MenuItem"
import { IPost } from "../Feed/Feed"

interface IPostItem {
  post: IPost
  itemEditing: number | null
  onChangeItemEditing: (param: number | null) => void
}

export default function PostItem({ post, itemEditing, onChangeItemEditing }: IPostItem) {
  return <div className="p-4 mt-4 border bg-white shadow-full-shadow rounded-lg">
    <div className="flex items-center">
      <Avatar />
      <div className="grow">
        <div className="text-sm font-semibold flex justify-between items-center relative">
          <span>{post.name}</span>
          <button className="hover:cursor-pointer">
            <BsThreeDots />
          </button>
          {itemEditing === post.id && <MenuItem onChangeItemEditing={onChangeItemEditing}/>}
        </div>
        <p className="text-xs font-medium text-gray-500">10m</p>
      </div>
    </div>
    <div className="mt-4 mb-4">
      {post.content}
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