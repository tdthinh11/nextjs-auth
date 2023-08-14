import { useState, useRef } from 'react'
import Avatar from "../Avatar/Avatar";
import { CommentItem } from './CommentItem';
import { IComment } from '../Feed/Feed';
import { IoSendSharp } from 'react-icons/io5';

interface ICommentOnPost {
  commentInit: IComment[]
  rootId: number
  isShowComment: boolean
  onSubmitComment: (param: IComment) => void
}
export default function CommentOnPost({ commentInit, rootId, isShowComment, onSubmitComment }: ICommentOnPost) {
  const refTextArea = useRef<HTMLTextAreaElement>(null)
  const [isSending, setIsSending] = useState<boolean>(false)
  const [commentValue, setCommentValue] = useState<string>('')
  const [isShowScrollBarInComment, setIsShowScrollBarInComment] = useState<boolean>(false)
  const onChangeTextInput: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    if (!isSending) {
      // onChange && onChange(event.target.value.replace(/\r?\n/g, '\n'))
      setCommentValue(event.target.value.replace(/\r?\n/g, '\n'))
      // adjustTextareaHeight()
    }
  }

  // const adjustTextareaHeight = () => {
  //   if (refTextArea.current) {
  //     refTextArea.current.style.height = 'auto'
  //     refTextArea.current.style.height = refTextArea.current.scrollHeight + 'px'
  //     // if (refTextArea.current.scrollHeight > 104) {
  //     //   setIsShowScrollBarInComment(true)
  //     // } else {
  //     //   setIsShowScrollBarInComment(false)
  //     // }
  //   }
  // }

  const handleSubmitComment = () => {
    const param: IComment = {
      rootId: rootId,
      id: commentInit.length,
      userName: `User Name  + ${new Date().getMilliseconds()}`,
      commentContent: commentValue
    }
    setCommentValue('')
    onSubmitComment(param)
  }

  return <div className='mt-2'>
    {isShowComment && <div>
      {commentInit.map(((itemComment, index) => {
        return <div key={index}>
          <CommentItem
            rootId={itemComment.rootId}
            id={itemComment.id}
            src={itemComment.src}
            userName={itemComment.userName}
            commentContent={itemComment.commentContent}
          />
        </div>
      }))}
    </div>}
    <div className="flex items-start">
      <div className="grow shrink-0">
        <Avatar />
      </div>
      <div className='w-full flex flex-col bg-gray-100 rounded-3xl overflow-hidden'>
        <textarea name="comment" id="" rows={1}
          value={commentValue}
          className="border-t border-x w-full py-2 px-4 rounded-t-3xl text-left resize-none focus:border-b-0 outline-none max-h-[104px] min-h-[42px] bg-gray-100"
          placeholder="Write a comment"
          onChange={onChangeTextInput}
          ref={refTextArea}
        ></textarea>
        <div className={`${commentValue ? 'inline-flex w-full justify-end border-x border-b pb-2 pr-4' : 'hidden'}`}>
          <button
            onClick={handleSubmitComment}
          >
            <IoSendSharp className={`w-5 h-5 ${commentValue ? 'text-primary' : 'text-gray-300'}`} />
          </button>
        </div>
      </div>
    </div>
  </div>
}