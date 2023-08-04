'use client'
import { useState } from "react";
import CreateNewPost from "../CreateNewPost/CreateNewPost";
import PostItem from "../PostItem/PostItem";

export interface IPost {
  id: number
  name: string
  content: string
}

const FeedList:IPost[] = [
  {
    id: 0,
    name: 'Christiano Ronaldo',
    content: 'Good performance against a strong team. Pre-season preparations continue!💪🏼Fantastic welcome from the fans here in Japan 🇯🇵🙌🏼'
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
    #AlNassrJapanTour2023`
  },
  {
    id: 2,
    name: 'CR7',
    content: 'Get the opportunity to meet and train alongside me.'
  },
  {
    id: 3,
    name: 'Christiano Ronaldo',
    content: 'Introducing my new FEARLESS. A perfume made with the most fearless side of myself in mind.'
  },
]

export default function Feed() {
  const [itemEditing, setItemEditing] = useState<number | null>(0)
  return <div className="w-post-page">
    <div>
      <CreateNewPost />
    </div>
    {FeedList.map((post, index) => {
      return <PostItem
        key={index}
        post={post}
        itemEditing={itemEditing}
        onChangeItemEditing={(param) => setItemEditing(param)}/>
    })}
  </div>
}