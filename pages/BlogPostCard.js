import Image from 'next/image';

export default function BlogPostCard({ title, imag ,gradient}) {
  return (
    <div className={gradient}>
        <div className="flex flex-col justify-between h-full bg-white rounded-lg p-4 border border-2 border-red-100">
          <div className="flex flex-col">
            <Image src={imag} width={'3508'} height={'2492'} alt={'food'} />
            <h4 className="text-lg md:text-lg font-medium w-full text-gray-900 tracking-tight text-center">
              {title}
            </h4>
          </div>
        </div>
    </div>
  );
}