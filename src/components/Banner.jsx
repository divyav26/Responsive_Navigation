import React from 'react'
import banner from '../img/banner.avif'

const Banner = ({images}) => {
  return (
    <div className='lg:mt-4'>
      <div className='overflex-hidden relative'>
        <div className='flex'>
          <img src={banner} alt='' className='h-[70vh] w-full'/>
          </div>
        <div className='absolute inset-0 flex items-center justify-between p-4'>
          <button>

          </button>

          <button>

          </button>
        </div>
      </div>
    </div>
  )
}

export default Banner
