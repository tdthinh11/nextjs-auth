'use client'
import React, { useRef, useCallback } from 'react'
import ReactHtmlParser from 'html-react-parser'
import { AiOutlineLike, AiFillLike } from "react-icons/ai"
import { useState } from 'react'
import { BiComment } from "react-icons/bi"
import { PiShareFatThin } from "react-icons/pi"
import { BsThreeDots } from "react-icons/bs"
import Avatar from "../Avatar/Avatar"
import MenuItem from "../MenuItem/MenuItem"
import { IComment, IPost } from "../Feed/Feed"
import useClickOutSide from "@/hook/useClickOutSide"
import Modal from '../Modal/Modal'
import EditorComponent from '../EditorComponent/EditorComponent'
import CommentOnPost from '../Comment/CommentOnPost'

interface IPostItem {
  post: IPost
  menuItemId: number | null
  onChangeMenuItemId: (param: number | null) => void
  onRemovePost: (postId: number) => void
  onUpdatePost: (post: IPost) => void
  onLikePost: (userId: number, postId: number) => void
  onSubmitComment: (param: IComment) => void
}

export default function PostItem({ post, menuItemId, onChangeMenuItemId, onRemovePost, onUpdatePost, onLikePost, onSubmitComment }: IPostItem) {
  const popupRef = useRef<HTMLDivElement>(null);
  const [isEditingId, setIsEditingId] = useState<number | null>(null)
  const [postContent, setPostContent] = useState<string>(post.content)

  const handleRemovePost = useCallback(() => {
    onRemovePost(post.id)
  }, [onRemovePost, post.id])

  const handelUpdatePost = useCallback(() => {
    const postItem: IPost = {
      ...post,
      content: postContent
    }
    onUpdatePost(postItem)
    setIsEditingId(null)
  }, [onUpdatePost, post, postContent])

  const handleClose = useCallback(() => {
    onChangeMenuItemId(null)
  }, [onChangeMenuItemId])

  const handleLike = useCallback(() => {
    const userId = 0
    const postId = post.id
    onLikePost(userId, postId)
  }, [onLikePost, post.id])

  // Attach the hook to the popupRef and handleClose function
  useClickOutSide(popupRef, handleClose);

  return <div className="px-4 pt-4 pb-2 mt-4 border bg-white shadow-full-shadow rounded-lg">
    <div className="flex items-center">
      <Avatar />
      <div className="grow">
        <div className="text-sm font-semibold flex justify-between items-center relative">
          <span>{post.name}</span>
          <button
            className="hover:cursor-pointer"
            onClick={() => onChangeMenuItemId(post.id)}
          >
            <BsThreeDots />
          </button>
          {menuItemId === post.id && <div className='absolute right-3 top-5 border shadow-full-shadow rounded-lg overflow-hidden' ref={popupRef}>
            <MenuItem onRemovePost={handleRemovePost} onShowEditingPost={() => setIsEditingId(post.id)} />
          </div>}
        </div>
        <p className="text-xs font-medium text-gray-500">10m</p>
      </div>
    </div>
    <div className="mt-4 mb-1">
      {isEditingId !== post.id ? (
        ReactHtmlParser(post.content)
      ) : (
        <Modal
          isVisible={isEditingId !== null}
          hideModal={() => setIsEditingId(null)}
          title="Edit"
        >
          <EditorComponent
            initialValue={post.content}
            height={300}
            onEditorChange={(content, _) => setPostContent(content)}
          />
          <button
            className={`px-3 py-2 w-full mt-5 rounded-md font-semibold ${postContent.trim().length === 0 ? 'bg-gray-100 text-gray-500' : 'bg-btn-primary text-white'}`}
            disabled={postContent.trim().length === 0}
            onClick={handelUpdatePost}
          >
            Edit
          </button>
        </Modal>
      )}
      <div className='mt-3'>
        {post.like.length > 0 ? (
          <div className='text-xs text-gray-600'>
            <span>{post.like.length}</span>
            <span>{post.like.length > 1 ? ' likes' : ' like'}</span>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
    <div className="border-t border-b">
      <div className="flex justify-between">
        <button
          className='flex items-center gap-1 px-3 py-2 hover:bg-gray-100 rounded-md duration-150'
          onClick={handleLike}
        >
          {/* post.like.includes(0) 0 is user id */}
          {post.like.includes(0) ? (
            <AiFillLike className='text-primary' />
          ) : (
            <AiOutlineLike />
          )}
          <span className={post.like.includes(0) ? 'text-primary' : ''}>Like</span>
        </button>
        <button className='flex items-center gap-1 px-3 py-2 hover:bg-gray-100 rounded-md duration-150'>
          <BiComment />
          <span>Comment</span>
        </button>
        <button className='flex items-center gap-1 px-3 py-2 hover:bg-gray-100 rounded-md duration-150'>
          <PiShareFatThin />
          <span>Share</span>
        </button>
      </div>
    </div>
    <div className='mt-2'>
      <CommentOnPost
        commentInit={post.commentInit}
        onSubmitComment={onSubmitComment}
      />
    </div>
  </div>
}