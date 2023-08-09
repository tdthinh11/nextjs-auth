'use client'
import { useState, useCallback } from "react";
import CreateNewPost from "../CreateNewPost/CreateNewPost";
import PostItem from "../PostItem/PostItem";
import { StaticImageData } from "next/image";

export interface IComment {
  rootId: number
  id: number
  src?: string | StaticImageData
  userName: string
  commentContent: string
}
export interface IPost {
  id: number
  src?: string | StaticImageData
  name: string
  content: string
  like: number[]
  commentInit: IComment[]
}

const FeedList:IPost[] = [
  {
    id: 0,
    src: 'https://picsum.photos/id/100/200/300',
    name: 'Christiano Ronaldo',
    content: 'Good performance against a strong team. Pre-season preparations continue!💪🏼Fantastic welcome from the fans here in Japan 🇯🇵🙌🏼',
    like: [0, 1],
    commentInit: [
      {
        rootId: 0,
        id: 0,
        src: 'https://picsum.photos/id/100/200/300',
        userName: 'User comment name',
        commentContent: 'I’m looking forward to play these two exciting matches and to perfom in my best condition, I am preparing with SIXPAD'
      }
    ]
  },
  {
    id: 1,
    src: 'https://picsum.photos/id/101/200/300',
    name: 'Christiano Fake',
    content: `For the first time in seven years, I am in Japan, where I have visited many times for my partner MTG.
    July 25th – Al-Nassr vs PSG 
    July 27th – Al-Nassr vs Inter
    I’m looking forward to play these two exciting matches and to perfom in my best condition, I am preparing with SIXPAD.
    I am here, Osaka!
    #SIXPAD 
    #アルナスル来日2023
    #AlNassrJapanTour2023`,
    like: [1],
    commentInit: [
      {
        rootId: 1,
        id: 0,
        src: 'https://picsum.photos/id/10/200/300',
        userName: 'User comment name',
        commentContent: 'I’m looking forward to play these two exciting matches and to perfom in my best condition, I am preparing with SIXPAD'
      },
      {
        rootId: 1,
        id: 1,
        src: 'https://picsum.photos/id/11/200/300',
        userName: 'User name 2',
        commentContent: 'I’m looking forward to play these two exciting matches and to perfom in my best condition, I am preparing with SIXPAD'
      }
    ]
  },
  {
    id: 2,
    src: 'https://picsum.photos/id/102/200/300',
    name: 'CR7',
    content: 'Get the opportunity to meet and train alongside me.',
    like: [],
    commentInit: [
      {
        rootId: 2,
        id: 0,
        src: 'https://picsum.photos/id/20/200/300',
        userName: 'User comment name',
        commentContent: 'I’m looking forward to play these two exciting matches and to perfom in my best condition, I am preparing with SIXPAD'
      }
    ]
  },
  {
    id: 3,
    src: 'https://picsum.photos/id/103/200/300',
    name: 'Christiano Ronaldo',
    content: 'Introducing my new FEARLESS. A perfume made with the most fearless side of myself in mind.',
    like: [],
    commentInit: [
      {
        rootId: 3,
        id: 0,
        src: 'https://picsum.photos/id/30/200/300',
        userName: 'User comment name',
        commentContent: 'I’m looking forward to play these two exciting matches and to perfom in my best condition, I am preparing with SIXPAD'
      }
    ]
  },
]

export default function Feed() {
  const [itemEditing, setMenuItemId] = useState<number | null>(null)
  const [feedList, setFeedList] = useState<IPost[]>(FeedList)

  const handleCreateNewPost = useCallback((postItem: IPost) => {
    setFeedList(prev => {
      return [postItem, ...prev]
    })
  }, [])

  const handleRemovePostItem = useCallback((postId: number) => {
    // Call API to update list post
    setTimeout(() => {
      setMenuItemId(null)
      setFeedList((prev) => prev.filter((postItem => postItem.id !== postId)))
    }, 1000)
  }, [])

  const handleEditPost = useCallback((post: IPost) => {
    setTimeout(() => {
      setFeedList(prev => {
        const listPostUpdate = [...prev]
        const index = prev.findIndex(postItem => postItem.id === post.id)
        if (index !== -1) {
          listPostUpdate[index] = {...post}
        }
        return listPostUpdate
      })
    }, 500)
  }, [])

  const handleLikePost = useCallback((userId: number, postId: number) => {
    setTimeout(() => {
      setFeedList(prev => {
        const listPostUpdate = [...prev]
        const index = prev.findIndex(postItem => postItem.id === postId)
        if (index !== -1) {
          if (listPostUpdate[index].like.length > 0) {
            const userLikeIndex = listPostUpdate[index].like.findIndex(user => user === userId)
            userLikeIndex !== -1 ? listPostUpdate[index].like.splice(userLikeIndex, 1) : listPostUpdate[index].like.push(userId)
          } else {
            listPostUpdate[index].like.push(userId)
          }
        }
        return listPostUpdate
      })
    }, 10)
  }, [])

  const handleSubmitComment = useCallback((comment: IComment) => {
    setTimeout(() => {
      setFeedList(prev => {
        const listPostUpdate = [...prev]
        const index = prev.findIndex(postItem => postItem.id === comment.rootId)
        if (index !== -1) {
          listPostUpdate[index].commentInit.push(comment)
        }
        return listPostUpdate
      })
    }, 500)
  }, [])

  return <div className="w-post-page">
    <div>
      <CreateNewPost
        postLength={feedList.length}
        onCreateNewPost={handleCreateNewPost}
      />
    </div>
    {feedList.map((post, index) => {
      return <PostItem
        key={index}
        post={post}
        menuItemId={itemEditing}
        onChangeMenuItemId={(param) => setMenuItemId(param)}
        onRemovePost={postId => handleRemovePostItem(postId)}
        onUpdatePost={handleEditPost}
        onLikePost={handleLikePost}
        onSubmitComment={handleSubmitComment}
      />
    })}
  </div>
}