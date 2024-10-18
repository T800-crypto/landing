import React from 'react'

export const Footer = () => {
  return (
    <div className='flex justify-center bg-neutral-800 text-white py-10 mt-12 px-20 divide-x-2 divide-neutral-700'>
        <div className='w-full border-black flex items-center'>
            <h1>Terminator</h1>
        </div>
        <div className=' w-full flex justify-end '>
            <ul className=' text-center md:text-right flex flex-col gap-4'>
                <li>Telegram</li>
                <li>GitHub</li>
                <li>Twitter</li>
            </ul>
        </div>
    </div>
  )
}
