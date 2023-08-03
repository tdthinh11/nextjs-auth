import CreateNewPost from '@/components/CreateNewPost/CreateNewPost'
import PostItem from '@/components/PostItem/PostItem'

export default function PostPage() {
  return <div className="w-post-page mx-auto mt-16">
    <div>
      <CreateNewPost />
    </div>
    <div>
      <PostItem isVisible={false} />
      <PostItem isVisible={false} />
      <PostItem isVisible={false} />
      <PostItem isVisible={false} />
      <PostItem isVisible={false} />
    </div>
  </div>
}