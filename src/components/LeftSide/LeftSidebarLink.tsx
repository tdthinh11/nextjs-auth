import { PostList } from '@/constant/route';
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link';

interface ILeftSidebarLink {
  image: StaticImageData
  text: string
  path?: string
}

const LeftSidebarLink = ({ image, text, path = '/' } : ILeftSidebarLink) => {
  return (
    <Link href={path} className="flex items-center gap-3 w-[300px] py-2 pl-1 cursor-pointer hover:bg-gray-200 rounded-md">
      <Image className="h-[30px] w-[30px] rounded-full" src={image} alt="icon" loading='lazy'/>
      <h1 className="text-[16px] font-medium">{text}</h1>
    </Link>
  );
};

export default LeftSidebarLink;
