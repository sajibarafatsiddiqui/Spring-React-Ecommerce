import React, { useEffect, useMemo, useRef, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { blue, blueGrey } from "@mui/material/colors";
import SectionCarouselData from "./SectionCarouselData";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  800: {items:3},
  1260: { items: 5 },
  1560: { items: 7 },
};

const SectionCarousel = ({data,sectionName}) =>{
    const [element,setElement]= useState({}); 
    const items = useMemo(() =>data.map((elem) => {console.log(elem);return<HomeSectionCard product={elem}/>}), [data]);
   
const syncActiveIndex=(item)=>{console.log(item); setElement(item)}
const slidePrev=()=>setElement((prevState)=> ({...prevState,item:prevState.item-1}));
const slideNext=()=>setElement((prevState)=>({...prevState,item:prevState.item+1}));

console.log(element.item);
    return (
  <div className='relative px-4 lg:px-8 object-contain'> 
  <h2 className="text-2xl font-extrabold text-gray-700 py-5">{sectionName}</h2>
    <div className='relative p-5 m-auto border border-blue-300' >
      <AliceCarousel
        items={items}
        responsive={responsive}
        disableButtonsControls
        disableDotsControls
        onSlideChanged={syncActiveIndex}
        onInitialized={syncActiveIndex} 
        activeIndex={element.item}       

      />
     
    </div>
    {!element.isPrevSlideDisabled &&
    <Button onClick={slidePrev} sx={{zIndex:'30',position:'absolute',top:'11rem', left:'0rem',translate:'0%',rotate:'90deg',color:'white',backgroundColor:blue[300]}}><ChevronLeftIcon sx={{rotate:'-90deg'}}/></Button>}

    
    {!element.isNextSlideDisabled &&
    <Button onClick={slideNext}  sx={{zIndex:'30',position:'absolute',top:'11rem', right:'0rem',translate:'0%',rotate:'-90deg',color:'white',backgroundColor:blue[300]}}><ChevronLeftIcon sx={{rotate:'-90deg'}}/></Button>
}
</div>
);
}

export default SectionCarousel;
