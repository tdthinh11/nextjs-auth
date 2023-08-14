import { AiFillLike, AiOutlineLike } from "react-icons/ai"
import { IPost } from "../Feed/Feed"
import { BiComment } from "react-icons/bi"
import { PiShareFatThin } from "react-icons/pi"

interface IPostLikeCommentShare {
  post: IPost
  onLike: () => void
  onShowComment: () => void
}
export default function PostLikeCommentShare({post, onLike, onShowComment } : IPostLikeCommentShare) {
  return <div className="border-t border-b">
    <div className="flex justify-around py-1">
      <button
        className='flex items-center gap-1 w-1/3 justify-center py-1 hover:bg-gray-100 rounded-md duration-150'
        onClick={onLike}
      >
        {/* post.like.includes(0) 0 is user id */}
        {post.like.includes(0) ? (
          <AiFillLike className='text-primary' />
        ) : (
          <AiOutlineLike />
        )}
        <span className={post.like.includes(0) ? 'text-primary' : ''}>Like</span>
      </button>
      <button
        className='flex items-center gap-1 w-1/3 justify-center py-1 hover:bg-gray-100 rounded-md duration-150'
        onClick={onShowComment}
      >
        <BiComment />
        <span>Comment</span>
      </button>
      <button className='flex items-center gap-1 w-1/3 justify-center py-1 hover:bg-gray-100 rounded-md duration-150'>
        <PiShareFatThin />
        <span>Share</span>
      </button>
    </div>
  </div>
}