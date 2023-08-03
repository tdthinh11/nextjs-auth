import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import "./style.css"

export default function MenuItem() {
  return <div className="menu-post-item absolute right-3 top-5 w-40 shadow-full-shadow bg-white">
    <button className="flex items-center gap-4 py-2 hover:bg-slate-100 p-2 hover:cursor-pointer w-full">
      <div>
        <AiOutlineEdit />
      </div>
      <span>
        Edit
      </span>
    </button>
    <button className="flex items-center gap-4 py-2 hover:bg-slate-100 p-2 hover:cursor-pointer w-full">
      <div>
        <AiOutlineDelete />
      </div>
      <span>
        Delete
      </span>
    </button>
  </div>
}