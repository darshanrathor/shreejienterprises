import Link from 'next/link'
import React from 'react'
import {BsFacebook,BsWhatsapp} from 'react-icons/bs'
import {BiLogoGmail} from 'react-icons/bi'
import Image from "../public/Bakground/bannerbg.jpg"

function banner() {
  return (
    <div className=' '>



<div
  class="relative opacity-110 overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center"
  style={{
    backgroundImage: 'url(../Bakground/bannerbg.jpg)',
    height: '550px'
  }}>
  <div
    class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
    style={{
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
    }}>
    <div class="flex h-full items-center justify-center">
      <div class="text-white">
        <h2 class="mb-2 md:text-5xl text-3xl font-semibold font-serif "> <span className='text-red-700'> 
         SHREEJI</span> ENTERPRISES</h2>
        <p class="mb-4 md:text-xl text-sm ">ISO 9001 : 2015, 14001 : 2015, OHSAS 18001 : 2007</p>
        <h4 class="  mt-10 md:text-2xl text-lg ">CIVIL, ELECTRICAL & FABRICATOR CONTRACTOR</h4>

        <div>

        <Link href="/Contact" >
        <button
          type="button"
          class="rounded mt-14 border-2 border-red-100 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-red-900 hover:bg-opacity-10 hover:text-red-700 focus:border-red-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-red-200 active:text-neutral-200 dark:hover:bg-red-700 "
          data-te-ripple-init
          data-te-ripple-color="light">
          CONTACT US
        </button>
         </Link>
        </div>
      </div>
    </div>
  </div>
</div>
   


       
    </div>
  
    

  )
}

export default banner