import Image, { StaticImageData } from 'next/image'

interface ILeftSidebarLink {
  image: StaticImageData
  text: string
}

const LeftSidebarLink = ({ image, text } : ILeftSidebarLink) => {
  return (
    <div className="flex items-center gap-3 w-[300px] py-2 pl-1 cursor-pointer hover:bg-gray-300">
      <Image className="h-[30px] w-[30px] rounded-full" src={image} alt="icon" />
      <h1 className="text-[16px] font-medium">{text}</h1>
    </div>
  );
};

export default LeftSidebarLink;
