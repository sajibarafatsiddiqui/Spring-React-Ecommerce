import React from 'react'
import Carousel from '../HomeCarousel/MainCarousel.jsx'
import SectionCarousel from '../HomeCarousel/SectionCarousel.jsx'
import SectionCarouselData from '../HomeCarousel/SectionCarouselData.jsx'

const HomePage = () => {

  return (
    <div><Carousel/>
     <div className='space-y-10 py-10'>
    {
      Object.values(
  SectionCarouselData.reduce((acc, elm) => {
    if (!acc[elm.thirdLevelCategory]) {
      acc[elm.thirdLevelCategory] = [];
    }
    acc[elm.thirdLevelCategory].push(elm);
    return acc
  }, {})).map((elm,idx) => {
   return  (<SectionCarousel data={elm} sectionName={elm[0].thirdLevelCategory} key={idx}/>)
    
  })
}
</div>
    </div>
  )
}

export default HomePage