import { Avatar, Box, Grid, Rating } from '@mui/material'
import React from 'react'

const ProductReviewCard = () => {
  return (
    <div className="border m-4">
    <Grid container xs={10} space={2} gap={2} className='p-4' >
        <Grid item xs={4} sm={2} md={1}>
            <Box className='p-2'>
            <Avatar sx={{bgcolor:'#8E00CB',width:'4rem',height:'4rem'}}>R</Avatar> 
            </Box>
        </Grid>
        <Grid item xs={6} sm={8} md={9}>
        <div>
        <p class="font-medium text-lg">Raju</p>
        <p class="text-xs font-bold text-gray-500">October 15,2024</p>
        <Rating value={4.5} name='half-rating' readOnly precision={0.5}/>
            
            </div>
        </Grid>
        <Grid item xs={10} className='item-center' >
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus temporibus nihil amet similique veritatis! Laborum magni officia assumenda soluta iste quia fugiat sapiente facilis sed numquam odit vero, exercitationem velit.</p>
        </Grid>
    </Grid>
    </div>
  )
}

export default ProductReviewCard