import React from 'react'
import Image from 'next/image';
import ButtonFill from '../../components/ButtonFill'
import MainLayout from '../../components/layouts/MainLayout'
import tailor from '../../img/tailor.jpg'
import Link from "next/link";

function BusOnSteriods() {
  return (
    <MainLayout>
      <div className='Major_container'>
      <div className='container'>
      <Image className='image' src={tailor} alt="Our bus Programme"/>
      more seat more money
     
  </div>
   <Link href={'/profile'}>
     
          <ButtonFill action ="submit" onClick={()=>{}}/>
          </Link>
         
      </div>
    </MainLayout>  
  )
}

export default BusOnSteriods
