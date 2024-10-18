import LINKS from '@/constants/links'
import React from 'react'

export const Footer = () => {
  return (
    <div className='flex flex-wrap md:flex-nowrap justify-center bg-neutral-800 text-white py-10 mt-12 px-20 divide-y-2 md:divide-x-2 md:divide-y-0 gap-2 divide-neutral-700'>
        <div className='w-full border-black flex items-center justify-center'>
            <h1>Terminator</h1>
        </div>
        <div className=' w-full flex justify-center md:justify-end pt-2'>
            <ul className='text-center md:text-right flex flex-col gap-4'>
                <li>
                  <a href={LINKS.SOCIALS.TELEGRAM} target="_blank">
                    Telegram
                  </a>
                </li>
                {/* <li>GitHub</li> */}
                <li>
                  <a href={LINKS.SOCIALS.TWITTER} target="_blank">
                    Twitter
                  </a>
                </li>
            </ul>
        </div>
    </div>
  )
}
