import React from 'react'
import Landing from '@/components/Landing'
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation'
import Team from '@/components/Team'

function page() {
  return (
    <div className=' overflow-x-hidden '>
        <Landing/>
        {/* <BackgroundGradientAnimation/> */}
        <Team/>
    </div>
  )
}

export default page