'use client'
import { useState, useCallback } from "react";
import CreateNewPost from "../CreateNewPost/CreateNewPost";
import PostItem from "../PostItem/PostItem";
export interface IPost {
  id: number
  name: string
  content: string
  like: number[]
}

const FeedList:IPost[] = [
  {
    id: 0,
    name: 'Christiano Ronaldo',
    content: 'Good performance against a strong team. Pre-season preparations continue!💪🏼Fantastic welcome from the fans here in Japan 🇯🇵🙌🏼',
    like: [0, 1]
  },
  {
    id: 1,
    name: 'Christiano Fake',
    content: `For the first time in seven years, I am in Japan, where I have visited many times for my partner MTG.
    July 25th – Al-Nassr vs PSG 
    July 27th – Al-Nassr vs Inter
    I’m looking forward to play these two exciting matches and to perfom in my best condition, I am preparing with SIXPAD.
    I am here, Osaka!
    #SIXPAD 
    #アルナスル来日2023
    #AlNassrJapanTour2023`,
    like: [1]
  },
  {
    id: 2,
    name: 'CR7',
    content: 'Get the opportunity to meet and train alongside me.',
    like: []
  },
  {
    id: 3,
    name: 'Christiano Ronaldo',
    content: 'Introducing my new FEARLESS. A perfume made with the most fearless side of myself in mind.',
    like: []
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
    console.log('Call API to update list post')
    // Call API to update list post
    setTimeout(() => {
      setMenuItemId(null)
      setFeedList((prev) => prev.filter((postItem => postItem.id !== postId)))
    }, 1000)
  }, [])

  const handleEditPost = useCallback((post: IPost) => {
    console.log('Handle editing post', post)
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
      />
    })}
  </div>
}