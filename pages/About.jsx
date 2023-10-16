import React from 'react'
import Image from 'next/image'
import Section2 from '@/components/Section2'
import Certificate from '../components/Certificate'
import Team from '../components/Team'
import Try1 from '../pages/try1'


const About = () => {
  return (

    <>




    <div className=' md:border-2 md:max-w-[800px] p-4 mx-auto  text-center items-center justify-center'>

        <div className=' h-screen  flex flex-col items-center '>
            <div>
                <Image src="/logo.png" width={150} height={150} />
            </div>
    
            <div className=' md:text-lg font-serif underline uppercase'>
                        Shreeji Enterprises
            </div>

            <h1 className='text-2xl mt-12 uppercase font-serif'>About Shreeji Enterprises</h1>


                <div className='mt-10 font-serif text-sm md:text-xl'>
                    <p>About 35 years ago our family commenced “Vaishali Constructions Company”,
In 2011, the expansion of the company took place and “SHREEJI ENTERPRISES”
was incorporated.</p>
                </div>

                <div className='mt-6 font-serif text-sm md:text-xl'>
                    <p>We provide services to Tata Power Co Ltd, Torrent Power, KEI Industries,
Oberoi Reality, Rustomjee, Shapoorji Pallonji and other infrastructure and Real
estate companies.</p>
                </div>

                <div className='mt-6 font-serif text-sm md:text-xl'>
                    <p>The company is dedicated to organizations seeking above management
facilities. We are assisted by a team of qualified and experienced engineers
who are well‐ versed in execution of all kinds of projects, with a stubborn
commitment to quality and project schedule to the entire satisfaction of all our
esteemed clients.</p>
                </div>

    </div>            

    </div>
    <Team />

   

    <Section2 />

    <Try1 />

    <Certificate />

    

  




    </>
  )
}

export default About