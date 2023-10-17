import Image from 'next/image';

import React from 'react'

const gallery = () => {
  return (

    <>
    <div className='mt-20' >

    <div className='text-center mb-10' >
      <h1 className='text-3xl font-serif'>Packaged Sub Station (PSS)</h1>

    </div>
      
<div className="  grid grid-cols md:grid-cols-2 w-full mx-auto gap-4 md:items-center md:justify-center lg:center lg:px-40 p-6">


    
    <Image className=" max-w-full rounded-lg focus:border-none active:border-none"
                          src="/gallery/1.jpg"
                          width={490}
                          height={490}
                          alt="gallery1"
                        
                        /> 
   <Image className="h-auto max-w-full rounded-lg focus:border-none active:border-none"
                          src="/gallery/2.jpg"
                          width={490}
                          height={490}
                          alt="gallery1"
                        
                        /> 
                        <Image className="h-auto max-w-full rounded-lg focus:border-none active:border-none"
                          src="/gallery/3.jpg"
                          width={490}
                          height={490}
                          alt="gallery1"
                        
                        /> 
                        <Image className="h-auto  rounded-lg focus:border-none active:border-none"
                          src="/gallery/4.jpg"
                          width={490}
                          height={490}
                          alt="gallery1"
                        
                        /> 
                       
    </div>



    </div>



    <div className='mt-20' >

<div className='text-center mb-10' >
  <h1 className='text-3xl font-serif'> Distribution Sub Station (DSS) </h1>

</div>
  
<div className="  grid grid-cols md:grid-cols-2 w-full mx-auto gap-4 md:items-center md:justify-center lg:center lg:px-40 p-6">


    
    <Image className=" max-w-full rounded-lg focus:border-none active:border-none"
                          src="/gallery/1.jpg"
                          width={490}
                          height={490}
                          alt="gallery1"
                        
                        /> 
   <Image className="h-auto max-w-full rounded-lg focus:border-none active:border-none"
                          src="/gallery/2.jpg"
                          width={490}
                          height={490}
                          alt="gallery1"
                        
                        /> 
                        <Image className="h-auto max-w-full rounded-lg focus:border-none active:border-none"
                          src="/gallery/3.jpg"
                          width={490}
                          height={490}
                          alt="gallery1"
                        
                        /> 
                        <Image className="h-auto  rounded-lg focus:border-none active:border-none"
                          src="/gallery/4.jpg"
                          width={490}
                          height={490}
                          alt="gallery1"
                        
                        /> 
                       
    </div>




</div>


    </>
   
  )
}

export default gallery
