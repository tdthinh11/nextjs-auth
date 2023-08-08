import Avatar from "../Avatar/Avatar";
import { IComment } from "../Feed/Feed";

export function CommentItem({userName, commentContent}: IComment) {
  return <div className="flex items-start my-4">
    <div className="shrink-0 mr-2">
      <Avatar />
    </div>
    <div className="grow">
      <div className="text-sm font-semibold flex justify-between items-center relative">
        <span>{userName}</span>
      </div>
      <p className="text-sm">{commentContent}</p>
    </div>
  </div>
}