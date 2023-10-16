import React from 'react'
import Navbar from '../components/navbar'
import Banner from '../components/banner'
import Categories from '@/components/Categories'
import Footer from '../components/footer'
import Section1 from '../components/Section1'
import Client from '@/components/Client'
import { Vision } from '@/components/Vision'





function index() {
  return (
    <div className=''>

      
    <Banner />
     
      <Categories />
     
      
     <Vision />
     
     <Client />
     
    

   
    </div>
  )
}

export default index