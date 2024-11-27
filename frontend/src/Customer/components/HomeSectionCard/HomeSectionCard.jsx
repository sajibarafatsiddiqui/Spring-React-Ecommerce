import React from 'react'

const HomeSectionCard = ({ product }) => {
  return (
    <div className='flex flex-col items-center w-[15rem] overflow-hidden shadow-lg rounded-lg cursor-pointer '>
       <div className='flex h-[16rem] w-[13rem]'>
        <img className="w-full h-full object-cover object-top" src={product.imageUrl}
        alt="image" />
        </div>
        <div className='p-4 '>
            <h3 className='text-gray-500 font-medium text-lg text-center'>{product.brandName}</h3>
            <p className='text-center text-gray-200t text-sm mt-2'>{product.title}</p>

        </div>
    </div>
  )
}

export default HomeSectionCard