import React from 'react'
import { assets, blog_data } from "@/Assets/assets";
import Link from "next/link";
import Image from "next/image"
export const Blogitem = ({ title, description, category, image, id }) => {
  return (
    <div className='max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000000]'>
      <Link href={`/blogs/${id}`}>
        {/* <Image src={image} alt="" width={400} height={400} className='border-b border-black' /> */}
        <Image
          src={image.startsWith("http") ? image : "/placeholder.png"}
          alt="blog"
          width={400}
          height={400}
          className='border-b border-black'
        />
      </Link>
      <p className='ml-5 mt-5 px-1 inline-block bg-black text-white text-sm'>{category}</p>
      <div className='p-5'>
        <h1 className='mb-4 text-lg font-medium text-gray-900 tracking-tight'>{title}</h1>
        <p className='mb-4 text-sm text-gray-700 tracking-tight'
          dangerouslySetInnerHTML={{ __html: description.slice(0, 120) }}></p>
        <Link href={`/blogs/${id}`} className='inline-flex items-center py-2 font-semibold text-center'>
          Read more<Image src={assets.arrow} className='ml-2' alt='' width={12} height={12}></Image></Link>
      </div>
    </div>
  )
}
