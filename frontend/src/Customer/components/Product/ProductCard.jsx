import React, { useImperativeHandle, useRef } from 'react'
import '../Product/ProductCard.css'
import { forwardRef } from 'react';


const ProductCard = forwardRef(({ product,tabIndex }, ref) => {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focusInput() {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  }));
  return (
    <div className='productCard w-[15rem] transition-all cursor-pointer m-3' ref={inputRef} tabIndex={tabIndex}>
        <div className="h-[20rem]">
            <img className='p-3 w-full h-full object-fill object-left-top' src={product.imageUrl}/>
        </div>
        <div className='textPart flex flex-col text-center'>
            <p className='font-bold opacity-60'>
            {product.brandName}
            </p>
            <p className='font-medium'>{product.title}</p>
        
            <div className='flex opacity-70 justify-evenly '>
               <p className='line-through opacity-40 font-bold '>{`BDT${product.price}`}</p>
               <p className='font-bold'>{`BDT${product.discountedPrice}`}</p>
               <p className='text-green-700 font-bold'>{`${Math.round((((product.price-product.discountedPrice)/product.price).toFixed(2))*100)}% OFF`}</p>
            </div>
            </div>  

    </div>
  )
});

export default ProductCard