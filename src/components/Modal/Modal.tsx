import { GrClose } from "react-icons/gr"

interface IModal {
  isVisible: boolean
  size?: string
  height?: string
  maxHeight?: string
  modalZIndex?: number
  body?: React.ReactNode
  footer?: React.ReactNode
  title: string
  hideModal: () => void
}

export default function Modal({
  isVisible = false,
  size = '400px',
  height,
  maxHeight = '40vh',
  modalZIndex = 100,
  body,
  footer,
  title,
  hideModal,
  ...props
}: IModal) {
  return <div className="fade" {...props}>
    {isVisible && (
      <div
        className="modal-backdrop fixed top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,.3)] flex justify-center items-center"
        style={{ zIndex: modalZIndex }}
      >
        <div
          className="modal bg-white rounded-md"
          style={{
            maxWidth: size,
            width: size,
            height: height,
            // maxHeight: maxHeight,
          }}
        >
          <div className="flex justify-between items-center p-4">
            <h1 className="font-bold">{title}</h1>
            <button
              onClick={() => hideModal()}
              className="w-10 h-10 rounded-full flex justify-center items-center bg-gray-100 hover:bg-slate-200 duration-200"
            >
              <GrClose />
            </button>
          </div>
          <div className="border-b mb-4"></div>
          <div className="p-4">
            <div className="body overflow-x-hidden overflow-y-auto"
              style={{
                maxHeight: maxHeight
              }}
            >
              {body}
            </div>
            <div className="footer">
              {footer}
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
}