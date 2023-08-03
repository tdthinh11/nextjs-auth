import Image from 'next/image'
import Ava from '@/asset/img/cr7.png'
export default function Avatar() {
  return <div className="w-9 h-9 rounded-full mr-2 bg-blue-400 flex items-center justify-center overflow-hidden">
    <Image src={Ava} alt='ava' className='w-full h-full bg-cover'/>
  </div>
}