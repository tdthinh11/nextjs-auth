import Image from "next/image";
import { ChangeEvent, useRef } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface IUploadImage {
  img?: string | StaticImport
  width?: number
  onUpload?: (imgSrc: string) => void
}
export default function UploadImage({img, width, onUpload} : IUploadImage) {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files?.length > 0) {
      const file = e?.target.files[0];
      if (file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/gif' || file.type === 'image/png') {
        // Tạo đối tượng để đọc file
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
          if (e.target?.result) {
            onUpload && onUpload(e.target.result as string)
          }
        }
      }

    }
  }
  return <div className="flex items-center">
    <label className="hidden">
      <input
        type="file"
        onChange={handleUpload}
        ref={fileInputRef}
      />
    </label>
    <button
      onClick={handleButtonClick}
    >
      {img && <Image src={img} alt="img" loading="lazy" width={width} />}
    </button>
  </div>
}