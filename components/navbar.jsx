import Link from 'next/link'
import React, { useState  } from 'react'
import {FiMenu} from 'react-icons/FI'
import {AiOutlineClose} from 'react-icons/ai'
import {BsFacebook,BsWhatsapp} from 'react-icons/bs'
import {BiLogoGmail} from 'react-icons/bi'
import Image from 'next/image'



const navbar = () => {
    const[toggle,setToggle] =useState (false)
   
  return (

    <>


         
        <div className=' sticky    top-0 z-20 w-[100%] bg-white shadow-sm' href='#'>
            <div className='conatiner mx-auto flex justify-between items-center px-4 py-4'>


            
                <div className='flex items-center align-center justify-center gap-1  '>
                <Link href="/" >
                    <div className='flex items-center align-center justify-center gap-1 '>
                <Image src="/logo.png" width={50} height={50} />
                    <div className=' font-serif text-red-800 md:text-lg gap-3 '>
                        Shreeji Enterprises
                    </div> 
                    </div>
                    </Link>
                    


                </div>

               

                <div className=' hidden md:flex gap-10 items-center uppercase tracking-wider '>
                    <Link href="/" className='hover:hover:text-red-800'>Home</Link>
                    <Link href="/About" className='hover:text-red-800'>About Us</Link>
                    <Link href="/Whatwedo" className='hover:text-red-800'>Service</Link>
                    <Link href="/Policy" className='hover:text-red-800'>Policy & safety</Link>
                    <Link href="/gallery" className='hover:text-red-800'>Gallery</Link>
                    <Link href="/Contact" className='hover:text-red-800'>Contact Us</Link>
                    

                </div>

            
                <div>
                <Link href="/Contact" >

                    <button  className=' hidden md:block border border-gray-400 px-4 py-1 rounded-md hover:bg-red-700 hover:text-white'> Request Quote</button> 
                    </Link>
                     </div>

                    


               {toggle ?(
                 <AiOutlineClose onClick={()=>setToggle(!toggle)}  size={30} className='md:hidden block'/>

               ):(<FiMenu onClick={()=>setToggle(!toggle)}  size={30} className='md:hidden block'/>
               )
               
               }
              
                
               

            </div>  

            {/*Responsive Menu  */}

            <div className={`duration-300 md:hidden bg-black/90 text-white w-[70%] h-screen flex flex-col fixed top-[80px] ${toggle ? 'left-[0]' : 'left-[-100%]'}`}>

            <Link href="/" className='hover:text-gray-400 p-5'>  Home</Link>
                    <Link href="/" className='hover:text-gray-400 p-5'>What We Do</Link>
                    <Link href="/" className='hover:text-gray-400 p-5'>Capabilites</Link>
                    <Link href="/" className='hover:text-gray-400 p-5'>Contact Us</Link>
                    <Link href="/" className='hover:text-gray-400 p-5'>About Us</Link>

                    <div className='flex flex-col gap-5  items-center mt-28 '>
            <div className='bg-green-600 w-[250px] h-[1px] '></div>

            <div className='flex gap-10'>
            <Link href='#' target=' _blank'> <BsFacebook size={24} className='text-green-600 hover:translate-y-1.5 duration-300' /></Link>
            <Link href='#' target=' _blank'> <BiLogoGmail size={24} className='text-green-600 hover:translate-y-1.5 duration-300' /></Link>
            <Link href='#' target=' _blank'> <BsWhatsapp size={24} className='text-green-600 hover:translate-y-1.5 duration-300' /></Link>

            </div>
            
            

        </div>

            </div>

            




        </div>
    </>
  )
}

export default navbar