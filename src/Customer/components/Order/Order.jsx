import { Box, Checkbox, FormControlLabel, FormGroup, Grid, Typography } from '@mui/material'
import React from 'react'
import 'tailwindcss/tailwind.css'

const Order = () => {

const orderStatus=[
    {key:'1',value:'Order Placed'},
    {key:'2',value:'On the way'},
    {key:'3',value:'Delivered'},
    {key:'4',value:'Rejected'},
]
  return (
    <Grid container className=''>
        <Grid item xs={2.5} className='spacing-y-5 sticky border-gray-600 shadow-md '>
        <h2 className='py-4  text-gray-600 font-bold text-lg'>Order Status</h2>
        <FormGroup>
         {orderStatus.map(item=> 
        <FormControlLabel  className="text-lg text-gray-600" size='large' control={<Checkbox />} label={item.value} key={item.key}  />
        )}

        </FormGroup>
        </Grid>
        </Grid>
  )
}

export default Order