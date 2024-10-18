import React from 'react'

export const Footer = () => {
  return (
    <div className='flex justify-center bg-white text-black py-12 mt-12'>
        <div className='w-full border-r border-black flex justify-center items-center'>
            <h1>T-800</h1>
        </div>
        <div className=' w-full flex justify-end pr-20 '>
            <ul className=' text-center md:text-right flex flex-col gap-4'>
                <li>Telegram</li>
                <li>GitHub</li>
                <li>Twitter</li>
            </ul>
        </div>
    </div>
  )
}
