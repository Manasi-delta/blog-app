import React from 'react'
import Image from 'next/image'
import {assets} from "@/Assets/assets"
export const Footer= () => {
  return (
    <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center'>
        <Image src={assets.logo_light} alt="logo" width={120}/>
        <p className='text-amber-50 text-sm'>All right reserved. Copyright @Bloger</p>
        <div className='flex gap-1'>
            <a href='https://www.facebook.com/'><Image src={assets.facebook_icon}alt='' width={40}/></a>
            <a href='https://x.com/'><Image src={assets.twitter_icon}alt='' width={40}/></a>
            <a href='https://myaccount.google.com/'><Image src={assets.googleplus_icon}alt='' width={40}/></a>
            
            
        </div>
    </div>
  )
}
