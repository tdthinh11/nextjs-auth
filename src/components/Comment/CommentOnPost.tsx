import { useState, useRef } from 'react'
import Avatar from "../Avatar/Avatar";

export default function CommentOnPost() {
  const refTextArea = useRef<HTMLTextAreaElement>(null)
  const [isSending, setIsSending] = useState<boolean>(false)
  const [isShowScrollBarInComment, setIsShowScrollBarInComment] = useState<boolean>(false)
  const onChangeTextInput: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    if (!isSending) {
      // onChange && onChange(event.target.value.replace(/\r?\n/g, '\n'))
      console.log(event.target.value.replace(/\r?\n/g, '\n'))
      adjustTextareaHeight()
    }
  }

  const adjustTextareaHeight = () => {
    if (refTextArea.current) {
      refTextArea.current.style.height = 'auto'
      refTextArea.current.style.height = refTextArea.current.scrollHeight + 'px'
      if (refTextArea.current.scrollHeight > 104) {
        setIsShowScrollBarInComment(true)
      } else {
        setIsShowScrollBarInComment(false)
      }
    }
  }

  return <div className="flex items-center">
    <div className="grow shrink-0">
      <Avatar />
    </div>
    <textarea name="comment" id="" rows={1}
      className="border w-full py-2 px-4 rounded-3xl text-left resize-none focus:border outline-none max-h-[104px]"
      placeholder="Write a comment"
      onChange={onChangeTextInput}
      ref={refTextArea}
    ></textarea>
  </div>
}