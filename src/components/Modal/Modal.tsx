import { GrClose } from "react-icons/gr"

interface IModal {
  isVisible: boolean
  size?: string | number
  height?: string | number
  maxHeight?: string | number
  modalZIndex?: number
  children: React.ReactNode
  title: string
  hideModal: () => void
}

export default function Modal({
  isVisible = false,
  size = 400,
  height,
  maxHeight,
  modalZIndex = 100,
  children,
  title,
  hideModal
}: IModal) {
  return <div className="fade">
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
            maxHeight: maxHeight,
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
            {children}
          </div>
        </div>
      </div>
    )}
  </div>
}