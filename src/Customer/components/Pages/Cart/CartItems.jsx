
import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'



const CartItems = ({product}) => {
  return (
    <li key={product.id} className="flex border border-spacing-2 p-2 border-indigo-500">
    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 ">
    <img
      alt={product.imageAlt}
      src={product.imageSrc}
      className="h-full w-full object-cover object-center"
    />
    </div>
    
    <div className="ml-4 flex flex-1 flex-col">
    <div>
      <div className="flex justify-between text-base font-medium text-gray-900">
        <h3>
          <a href={product.href}>{product.name}</a>
        </h3>
        <p className="ml-4">{product.price}</p>
      </div>
      <p className="mt-1 text-sm text-gray-500">{product.color}</p>
    </div>
    <div className="flex flex-1 items-center justify-between text-sm">

    <div>
      <span className="text-gray-500">Qty </span>
  
      <IconButton>
            <RemoveCircleOutline sx={{color:'#052E16'}}/>
        </IconButton>
        <span className>{product.quantity}</span>
        <IconButton>
            <AddCircleOutline sx={{color:'#052E16'}}/>
        </IconButton>
        </div>
        <button type="button" className="font-medium text-red-600 hover:text-red-500">
          Remove
        </button>
    </div>
  
    </div>
    </li>
  )
}

export default CartItems
