
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
//import img1 from"../images/00000000000000000000000000000000.png"
//import { signIn, signOut } from 'next-auth/react';

  



const Header = () => {
 
  return (
    <>
      <header className='sticky top-0 z-30 flex w-full items-center justify-between bg-[#E7ECEE] p-4'>
        <div className='flex items-center justify-center md:w-1/5'>
          <Link href='/'>
            <div className='relative h-10 w-5 cursor-pointer opacity-75 transition hover:opacity-100'>
              <Image
                src="https://rb.gy/vsvv2o"
                layout="fill"
                objectFit="contain"
                alt="Logo"
              />
            </div>
          </Link>
        </div>
        <div className='hidden flex-1 items-center justify-center space-x-8 md:flex'>
          <a className='headerLink'>Product</a>
          <a className='headerLink'>Explore</a>
          <a className='headerLink'>Support</a>
          <a className='headerLink'>Business</a>
        </div>
        <div className='flex items-center justify-center gap-x-4 md:w-1/5'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 headerIcon">
         <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z" clipRule="evenodd" />
        </svg> 
          <Link href='/checkout'>
            <div className='relative cursor-pointer'>
            <span className="absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-[10px] text-white">
               5
              </span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 headerIcon">
             <path fillRule="evenodd" d="M6 5v1H4.667a1.75 1.75 0 0 0-1.743 1.598l-.826 9.5A1.75 1.75 0 0 0 3.84 19H16.16a1.75 1.75 0 0 0 1.743-1.902l-.826-9.5A1.75 1.75 0 0 0 15.333 6H14V5a4 4 0 0 0-8 0Zm4-2.5A2.5 2.5 0 0 0 7.5 5v1h5V5A2.5 2.5 0 0 0 10 2.5ZM7.5 10a2.5 2.5 0 0 0 5 0V8.75a.75.75 0 0 1 1.5 0V10a4 4 0 0 1-8 0V8.75a.75.75 0 0 1 1.5 0V10Z" clipRule="evenodd" />
             </svg>

            </div>
          </Link>
            {/* <Image
              src=''
              alt=""
              className="cursor-pointer rounded-full"
              width={34}
              height={34}
              onClick={() => signOut()}
            /> */}
         {/* : ( */}
           
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 headerIcon"  >
           <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
            </svg>

          {/* ) */}
        </div>
      </header>
    </>
  )
}

export default Header;


