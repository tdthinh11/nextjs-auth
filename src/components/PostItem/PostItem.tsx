'use client'
import React, { useRef, useCallback } from 'react'
import { useState } from 'react'
import { IComment, IPost } from "../Feed/Feed"
import useClickOutSide from "@/hook/useClickOutSide"
import CommentOnPost from '../Comment/CommentOnPost'
import PostItemHeader from './PostItemHeader'
import PostLikeCommentShare from './PostLikeCommentShare'
import PostItemBody from './PostItemBody'

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
  const [isShowComment, setIsShowComment] = useState<boolean>(false)

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
    <PostItemHeader
      post={post}
      menuItemId={menuItemId}
      onChangeMenuItemId={onChangeMenuItemId}
      onRemovePost={handleRemovePost}
      onShowEditingPost={() => setIsEditingId(post.id)}
      popupRef={popupRef}
    />
    <PostItemBody
      post={post}
      postContent={postContent}
      isEditingId={isEditingId}
      onHideModel={() => setIsEditingId(null)}
      onSetPostContent={(value) => setPostContent(value)}
      onUpdatePost={handelUpdatePost}
    />
    <PostLikeCommentShare
      post={post}
      onLike={handleLike}
      onShowComment={() => setIsShowComment(prev => !prev)}
    />
    <CommentOnPost
      rootId={post.id}
      commentInit={post.commentInit}
      onSubmitComment={onSubmitComment}
      isShowComment={isShowComment}
    />
  </div>
}