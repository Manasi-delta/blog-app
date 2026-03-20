"use client"
import { blog_data } from '@/Assets/assets'
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { assets } from '@/Assets/assets'
import Image from 'next/image'
import { Footer } from '@/Components/Footer'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/navigation'
const page = () => {
  const router = useRouter();
  const params = useParams()
  const [data, setData] = useState(null)

  const fetchBlogData = async () => {
    const response = await axios.get('/api/blog', {
      params: {
        id: params.id
      }
    })
    setData(response.data);
  }

  useEffect(() => {
    fetchBlogData()
  }, [])

  return (data ? <>
    <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
      <div className='flex justify-between items-center'>
        {/* <Link href='/'><Image src={assets.logo} width={180} alt="" className='w-[130px] sm:w-auto'/></Link>
        <button onClick={() => router.push('/admin')} className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3  sm:px-6 border border-black shadow-[-7px_7px_0px_#000000] cursor-pointer'>
          Get started <Image src={assets.arrow} alt=''/>
        </button> */}
        <button
          onClick={() => window.location.href = "/admin"}
          className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000] cursor-pointer'
        >
          Get started <Image src={assets.arrow} alt='' />
        </button>
      </div>
      <div className='text-center my-24'>
        <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
        <Image src={data.authorImg} alt='' width={60} height={60} className='mt-6 border border-amber-50 mx-auto rounded-full' />
        <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
      </div>
    </div>
    <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
      <Link href='/'>
        <Image src={data.image} alt="" width={1280} height={720} className='border border-white'></Image>
      </Link>
      <div className='blog-content' dangerouslySetInnerHTML={{ __html: data.description }}></div>
      <div className='my-24'>
        <p className='text-black font-semibold my-4'>Share this article on Social Media</p>
        <div className='flex gap-1'>
          <Image src={assets.facebook_icon} alt="" width={50} />
          <Image src={assets.twitter_icon} alt="" width={50} />
          <Image src={assets.googleplus_icon} alt="" width={50} />
        </div>
      </div>
    </div>
    <Footer />
  </> :
    <></>
  )
}

export default page
