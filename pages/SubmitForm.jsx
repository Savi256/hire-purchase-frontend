import React from 'react'
import BusOnSteriods from './programmes/busOnSteroids'
import Keke_drip from './programmes/keke_drip'
import Tailoring from './programmes/tailoring'
import tailor from '../img/tailor.jpg'

function SubmitForm() {

  return (
    <div>
     <Tailoring
     images={tailor}
     />
     <Keke_drip/>
     <BusOnSteriods/>

 

    </div>
  )
}

export default SubmitForm
