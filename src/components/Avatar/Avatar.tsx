import Image from 'next/image'
import { StaticImageData } from "next/image"

import Ava from '@/asset/img/cr7.png'
interface IAvatar {
  src?: string | StaticImageData
}
export default function Avatar({ src }: IAvatar) {
  return <div className="w-9 h-9 rounded-full mr-2 bg-gray-200 flex items-center justify-center overflow-hidden">
    <Image src={src ? src : Ava} width={100} height={100} alt='ava' className='w-full h-full bg-cover bg-center' loading='lazy'/>
    {/* <img src={src} alt="" loading='lazy' /> */}
  </div>
}