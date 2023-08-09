import Avatar from "../Avatar/Avatar";
import { IComment } from "../Feed/Feed";

export function CommentItem({userName, commentContent, src}: IComment) {
  return <div className="flex items-start my-4">
    <div className="shrink-0 mr-1">
      <Avatar
        src={src}
      />
    </div>
    <div className="bg-gray-100 px-4 py-3 rounded-3xl">
      <div className="text-sm font-semibold flex justify-between items-center relative">
        <span>{userName}</span>
      </div>
      <p className="text-sm">{commentContent}</p>
    </div>
  </div>
}