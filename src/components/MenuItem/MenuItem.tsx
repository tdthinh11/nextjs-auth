'use client'
import { useEffect, useRef } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import "./style.css"

interface IMenuItem {
  onChangeItemEditing: (param: number | null) => void
}


export default function MenuItem({onChangeItemEditing} : IMenuItem) {
  const wrapperRef = useRef(null);
  useEffect(() => {
    const handleClickOutSide = (event: MouseEvent) => {
      const elementTarget = event.currentTarget as HTMLElement
      console.log('mouse event', elementTarget)
    }
    window.addEventListener('click', handleClickOutSide)

    return () => {
      window.removeEventListener('click', handleClickOutSide)
    }
  }, [])
  return <div ref={wrapperRef} className="menu-post-item absolute right-3 top-5 w-40 shadow-full-shadow bg-white">
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