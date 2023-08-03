'use client'
import { useState } from "react";
import Avatar from "../Avatar/Avatar";
import EditorComponent from "../EditorComponent/EditorComponent";
import Modal from "../Modal/Modal";

export default function CreateNewPost() {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
  const [postContent, setPostContent] = useState<string>('')
  const onEditorChange = (content: string, editor: any) => {
    setPostContent(content)
  }

  const createNewPost = async () => {
    setPostContent('')
    try {
      setTimeout(() => {
        console.log(`Call API to create new post with content: ${postContent}`)
        setIsModalVisible(false)
      }, 2000)
      
    } catch (error) {
      // error
    }
  }

  return <div>
    <div className="text-center bg-white border p-5 flex items-center shadow-small-shadow rounded-lg">
      <div className="grow">
        <Avatar />
      </div>
      <button
        className="border w-full py-2 px-4 rounded-3xl text-left text-gray-400 hover:cursor-pointer"
        onClick={() => setIsModalVisible(true)}
      >What&apos;s on your mind?</button>
    </div>
    <Modal
      isVisible={isModalVisible}
      hideModal={() => setIsModalVisible(false)}
      title="Create new post"
    >
      <EditorComponent
        initialValue=""
        height={300}
        onEditorChange={onEditorChange}
      />
      <button
        className={`px-3 py-2 w-full mt-5 rounded-md font-semibold ${postContent.trim().length === 0 ? 'bg-gray-100 text-gray-500' : 'bg-btn-primary text-white'}`}
        disabled={postContent.trim().length === 0}
        onClick={createNewPost}
      >
        Create
      </button>
    </Modal>
  </div>
}