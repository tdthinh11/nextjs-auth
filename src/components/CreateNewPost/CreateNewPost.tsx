/* eslint-disable @next/next/no-img-element */
'use client'
import { useState } from "react";
import Image from "next/image";
import EditorComponent from "../EditorComponent/EditorComponent";
import Modal from "../Modal/Modal";
import { IPost } from "../Feed/Feed";
import Avatar from "../Avatar/Avatar";
import Ava from '@/asset/img/cr7.png'
import LibImage from '@/asset/img/lib_image.png'
import TagPeople from '@/asset/img/tag_people.png'
import Smile from '@/asset/img/smile.png'
import CheckIn from '@/asset/img/checkin.png'
import Gif from '@/asset/img/gif.png'
import LiveVideo from "@/asset/img/live_video.png"
import UploadImage from "../UploadImage/UploadImage";
interface ICreateNewPost {
  postLength?: number
  onCreateNewPost: (postItem: IPost) => void
}

export default function CreateNewPost({ postLength = 0, onCreateNewPost }: ICreateNewPost) {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
  const [postContent, setPostContent] = useState<string>('')
  const [imgSrc, setImgSrc] = useState<string>('')
  const onEditorChange = (content: string, editor: any) => {
    setPostContent(content)
  }

  const createNewPost = async () => {
    const postItem: IPost = {
      id: postLength,
      name: `Post Number ${new Date().getMinutes() + new Date().getSeconds()}`,
      content: postContent,
      like: [],
      commentInit: []
    }
    console.log(postContent)
    onCreateNewPost(postItem)
    setPostContent('')
    setIsModalVisible(false)
  }

  return <div>
    <div className="bg-white border p-3 shadow-small-shadow rounded-lg">
      <div className="text-center flex items-center">
        <div className="grow">
          <Avatar
            src={Ava}
          />
        </div>
        <button
          className="border w-full py-2 px-4 rounded-3xl text-left text-gray-400 hover:cursor-pointer"
          onClick={() => setIsModalVisible(true)}
        >What&apos;s on your mind?</button>
      </div>
      <div className="border-t-2 mt-3 mb-2"></div>
      <div className="flex justify-between px-3">
        <button className="flex items-center gap-2 hover:bg-gray-100 py-2 px-3 rounded-md">
          <Image src={LiveVideo} alt="img" loading="lazy" width={24} />
          <span>Live video</span>
        </button>
        <button className="flex items-center gap-2 hover:bg-gray-100 py-2 px-3 rounded-md">
          <Image src={LibImage} alt="img" loading="lazy" width={24} />
          <span>Photo/video</span>
        </button>
        <button className="flex items-center gap-2 hover:bg-gray-100 py-2 px-3 rounded-md">
          <Image src={TagPeople} alt="img" loading="lazy" width={24} />
          <span>Feeling/activity</span>
        </button>
      </div>
    </div>
    <Modal
      isVisible={isModalVisible}
      hideModal={() => {
        setIsModalVisible(false)
        setImgSrc('')
      }}
      title="Create new post"
      size="500px"
      body={<ChildBody onEditorChange={onEditorChange} imgSrc={imgSrc} />}
      footer={<Footer postContent={postContent} createNewPost={createNewPost} onUpload={(imgSrc) => setImgSrc(imgSrc)} />}
    />
  </div>
}

// Body section
interface IChildBody {
  onEditorChange: (content: string, editor: any) => void
  imgSrc?: string
}
const ChildBody = ({ onEditorChange, imgSrc }: IChildBody) => {
  return <div>
    <EditorComponent
      initialValue=""
      height={200}
      onEditorChange={onEditorChange}
    />
    <div className="mt-4">
      {imgSrc && <img src={imgSrc} alt="alt" width={'50%'} loading="lazy" />}
    </div>
  </div>
}

// Footer section
interface IFooter {
  postContent: string
  createNewPost: () => void
  onUpload?: (imgSrc: string) => void
}
const Footer = ({ postContent, createNewPost, onUpload }: IFooter) => {
  const [imgSrc, setImgSrc] = useState<string>('')

  const handleOnUpload = (img: string) => {
    setImgSrc(img)
    onUpload && onUpload(img)
  }
  return <div className="mt-6">
    <div className="flex items-center justify-between px-4 py-2 border-2 rounded-lg shadow-sm">
      <p className="font-semibold">Add to your post</p>
      <div className="flex items-center gap-4">
        <UploadImage img={LibImage} width={24} onUpload={handleOnUpload} />
        <Image src={TagPeople} alt="img" loading="lazy" width={24} />
        <Image src={Smile} alt="img" loading="lazy" width={24} />
        <Image src={CheckIn} alt="img" loading="lazy" width={24} />
        <Image src={Gif} alt="img" loading="lazy" width={24} />
      </div>
    </div>
    <button
      className={`px-3 py-2 w-full mt-5 rounded-md font-semibold ${postContent.trim().length === 0 && imgSrc.length === 0 ? 'bg-gray-100 text-gray-500 pointer-events-none' : 'bg-btn-primary text-white'}`}
      disabled={postContent.trim().length === 0 && imgSrc.length === 0}
      onClick={createNewPost}
    >
      Create
    </button>
  </div>
}