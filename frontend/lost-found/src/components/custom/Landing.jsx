import React from 'react'
import { Button } from '@/components/ui/button'

const Landing = () => {
  return (
    <div>
      <div className='flex justify-between items-center shadow-sm mx-3'>
        <div className='font-bold text-4xl'>
            Lost-Found
        </div>
        <div className='flex justify-center items-center gap-4'>
            <Button>Login</Button>
            <Button>Signup</Button>
        </div>
      </div>
    </div>
  )
}

export default Landing
