import Image from 'next/image'
import Ava from '@/asset/img/cr7.png'
export default function Avatar() {
  return <div className="w-9 h-9 rounded-full mr-2 bg-gray-200 flex items-center justify-center overflow-hidden">
    <Image src={Ava} alt='ava' className='w-full h-full bg-cover' loading='lazy'/>
  </div>
}