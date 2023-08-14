import { BsThreeDots } from "react-icons/bs";
import Avatar from "../Avatar/Avatar";
import { IPost } from "../Feed/Feed";
import MenuItem from "../MenuItem/MenuItem";
import { LegacyRef, useCallback } from "react";

interface IPostItemHeader {
  post: IPost
  menuItemId: number | null
  popupRef:  LegacyRef<HTMLDivElement>
  onRemovePost: (postId: number) => void
  onChangeMenuItemId: (param: number | null) => void
  onShowEditingPost: (id: number) => void
}
export default function PostItemHeader({ post, menuItemId, popupRef, onRemovePost, onChangeMenuItemId, onShowEditingPost }: IPostItemHeader) {
  const handleRemovePost = useCallback(() => {
    onRemovePost(post.id)
  }, [onRemovePost, post.id])

  return <div className="flex items-center">
    <Avatar
      src={post.src}
    />
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
          <MenuItem onRemovePost={handleRemovePost} onShowEditingPost={() => onShowEditingPost(post.id)} />
        </div>}
      </div>
      <p className="text-xs font-medium text-gray-500">10m</p>
    </div>
  </div>
}