import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {BsFacebook,BsWhatsapp} from 'react-icons/bs'
import {BiLogoGmail} from 'react-icons/bi'


const footer = () => {
  return (
    <div>
        

        
<footer class=" sticky bg-white border-t-2">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:grid md:grid-cols-2 ">
            {/*Logo Psrt*/}
          <div class="mb-10 md:mb-0">
              <a href="/" class="flex items-center">
                 
              <Image src="/logo.png" width={50} height={50} />
                    <div className=' md:text-lg  underline uppercase'>
                        Shreeji Enterprises
                    </div>
              </a>
              
              <h2 className='text-red-800 md:text-sm text-sm'>ISO 9001 : 2015, 14001 : 2015, OHSAS 18001 : 2007</h2>
              <div className='max-w-[400px] mt-5'>
                <span>B-71, Govind Gordhan Co-Op, Hsg., Soc.,
Popat Niwas, Kandivali (West), Mumbai – 67</span><br />

<span>Phone : +91 9930037577 / 9223335293</span><br />
<span className=''>Email : shreejienterprises452011@gmail.com</span>
              </div>
          </div>
          
            
          
          {/*Links parts  */}
          <div class="grid grid-cols-3 gap-4 sm:gap-6 sm:w-full sm:grid-cols-3">
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">Useful Link</h2>
                  <ul class="text-gray-900 center justify-center items-center  font-medium">
                      <li className=" mb-2">
                          <a href="https://flowbite.com/" class="hover:underline">Home</a>
                      </li>
                      <li className=" mb-2">
                          <a href="https://tailwindcss.com/" class="hover:underline">What we Do</a>
                      </li>
                      <li className=" mb-2">
                          <a href="https://tailwindcss.com/" class="hover:underline">Capabilities</a>
                      </li>
                      <li className=" mb-2">
                          <a href="https://tailwindcss.com/" class="hover:underline">Contact Us</a>
                      </li>
                      <li className=" mb-2">
                          <a href="https://tailwindcss.com/" class="hover:underline">About Us</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase ">Follow us</h2>

                  <div className='flex gap-4 md:gap-6'>
            <Link href='#' target=' _blank'> <BsFacebook size={20} className='text-gray-500 hover:translate-y-1.5 duration-300' /></Link>
            <Link href='#' target=' _blank'> <BiLogoGmail size={20} className='text-gray-500 hover:translate-y-1.5 duration-300' /></Link>
            <Link href='#' target=' _blank'> <BsWhatsapp size={20} className='text-gray-500 hover:translate-y-1.5 duration-300' /></Link>

            </div>
                  
              </div>
              <div className='w-full'>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase ">Accrediations</h2>
                  <Image className='text-gray-500' src="/Capture-removebg-preview.png" width={700} height={500}  />


              </div>
          </div>

      </div>


      {/* Last following link copy right and all  */}
      <hr class="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-lg text-gray-900 sm:text-center ">© 2023  All Rights Reserved.
          </span>
          <div class="flex mt-4 text-sm  space-x-5 text-gray-900  sm:justify-center sm:mt-0">
            - Created By Darshan Rathod
          </div>
      </div>
    </div>
</footer>

    </div>
  )
}

export default footer