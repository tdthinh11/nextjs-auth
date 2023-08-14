import EditorComponent from "../EditorComponent/EditorComponent"
import { IPost } from "../Feed/Feed"
import Modal from "../Modal/Modal"
import ReactHtmlParser from 'html-react-parser'

interface IPostItemBody {
  post: IPost
  isEditingId: number | null
  postContent: string
  onHideModel: () => void
  onSetPostContent: (a: string) => void
  onUpdatePost: () => void
}

export default function PostItemBody({ post, isEditingId, postContent, onHideModel,onSetPostContent, onUpdatePost }: IPostItemBody) {
  return <div className="mt-4 mb-1">
    {isEditingId !== post.id ? (
      ReactHtmlParser(post.content)
    ) : (
      <Modal
        isVisible={isEditingId !== null}
        hideModal={onHideModel}
        title="Edit"
        body={<div>
          <EditorComponent
            initialValue={post.content}
            height={300}
            onEditorChange={(content, _) => onSetPostContent(content)}
          />
          <button
            className={`px-3 py-2 w-full mt-5 rounded-md font-semibold ${postContent.trim().length === 0 ? 'bg-gray-100 text-gray-500' : 'bg-btn-primary text-white'}`}
            disabled={postContent.trim().length === 0}
            onClick={onUpdatePost}
          >
            Edit
          </button>
        </div>}
      />
    )}
    <div className='mt-3 flex justify-between'>
      {post.like.length > 0 ? (
        <div className='text-xs text-gray-600'>
          <span>{post.like.length}</span>
          <span>{post.like.length > 1 ? ' likes' : ' like'}</span>
        </div>
      ) : (
        <div></div>
      )}
      {post.commentInit.length > 0 ? (
        <div className='text-xs text-gray-600'>
          <span>{post.commentInit.length}</span>
          <span>{post.commentInit.length > 1 ? ' comments' : ' comment'}</span>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  </div>
}