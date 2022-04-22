import React from 'react'
import Image from 'next/image';
import ButtonFill from '../../components/ButtonFill'
import MainLayout from '../../components/layouts/MainLayout'
import tailor from '../../img/tailor.jpg'
import Link from "next/link";

function Keke_drip() {
  return (
    <MainLayout><div className='Major_container'>
      <div className='container'>
      <Image className='image' src={tailor} alt="Our keke Programme"/>
      rock that keke now
      </div>
       
       <Link href={'/profile'}>
          <ButtonFill action ="submit" onClick={()=>{}}/>
          </Link>
      
      </div>
    </MainLayout>
  )
}

export default Keke_drip
