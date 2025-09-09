import React from 'react'
import { currentUser } from '@clerk/nextjs/server'
import Guest from '@/components/Guest';


const HomePage = async () => {
  const user = await currentUser();

  if(!user){
    return <Guest/>
  }


  return (
    <div className='flex border h-[100vh] item-center  justify-center items-center'>
      <h1 className='text-4xl'>Home Page</h1>
    </div>
  )
}

export default HomePage
