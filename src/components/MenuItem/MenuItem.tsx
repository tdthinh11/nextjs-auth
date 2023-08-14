'use client'
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import "./style.css"
interface IMenuItem {
  onRemovePost: () => void
  onShowEditingPost: () => void
}

export default function MenuItem({ onRemovePost, onShowEditingPost }: IMenuItem) {
  return <div className="menu-post-item w-40 bg-white">
    <button
      className="flex items-center gap-4 hover:bg-slate-100 p-3 hover:cursor-pointer w-full"
      onClick={onShowEditingPost}
    >
      <div>
        <AiOutlineEdit />
      </div>
      <span>
        Edit
      </span>
    </button>
    <button
      className="flex items-center gap-4 hover:bg-slate-100 p-3 hover:cursor-pointer w-full"
      onClick={onRemovePost}
    >
      <div>
        <AiOutlineDelete />
      </div>
      <span>
        Delete
      </span>
    </button>
  </div>
}