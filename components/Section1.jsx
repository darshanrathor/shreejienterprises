import React from 'react'
import Image from 'next/image'

const section1 = () => {
  return (
    <div className='  flex flex-col justify-center items-center '>
        
<div  className='mb-12 md:mb-20 text-center text-3xl font-medium font-serif '>
    <h1>Working with Shreeji Enterprice</h1>
</div>
{/* content*/}
<div className='grid p-4  md:grid-cols-3 gap-4 sm:gap-6 sm:w-full grid-cols-2 mb-3'>

    {/* 1*/}

<div className=' mb-5 flex flex-col justify-center items-center'>
    <div className='h-[100px] center mb-3 justify-center items-center align-middle'>
<Image src="/lasercutting.png" width={100} height={100} />
</div>
<div className='justify-center items-center text-center max-w-[250px]'>
    Incredible advanced Fiber Laser Cutting Technology
</div>
</div>

{/* 2*/}

<div className='mb-5 flex flex-col justify-center items-center'>
    <div className='h-[100px] center mb-3 justify-center items-center align-middle'>
<Image src="/precision.png" width={100} height={100} />
</div>
<div className='justify-center items-center text-center max-w-[250px]'>
    Unmatched Precision & Repeatability of upto 0.05 mm
</div>
</div>


{/* 3*/}

<div className='mb-5 flex flex-col justify-center items-center'>
    <div className='h-[100px] center mb-3 justify-center items-center align-middle'>
<Image src="/beam.jpg" width={100} height={100} />
</div>
<div className='justify-center items-center text-center max-w-[250px]'>
    Large Laser Bed for High Volume bulk production Cycle
</div>
</div>

{/* 4*/}

<div className='mb-5 flex flex-col justify-center items-center'>
    <div className=' h-[100px] center mb-3 justify-center items-center align-middle'>
<Image src="/laser.png" width={100} height={100} />
</div>
<div className='justify-center items-center text-center max-w-[250px]'>
    Superior Edge Finish in Mild Steel , Aluminium , Copper Etc .
</div>
</div>

{/* 5*/}

<div className='mb-5 flex flex-col justify-center items-center'>
    <div className='h-[100px] center mb-3 justify-center items-center align-middle'>
<Image src="/task.png" width={100} height={100} />
</div>
<div className='justify-center items-center text-center max-w-[250px]'>
    One Stop Shop for Turnkey Fabrication Solutions 
</div>
</div>

{/* 6*/}

<div className='mb-5 flex flex-col justify-center items-center'>
    <div className='h-[100px] center mb-3 justify-center items-center align-middle'>
<Image src="/ISO.png" width={100} height={100} />
</div>
<div className='justify-center items-center text-center max-w-[250px]'>
    ISO Accredited Cerftification
</div>
</div>

</div>


    </div>
  )
}

export default section1