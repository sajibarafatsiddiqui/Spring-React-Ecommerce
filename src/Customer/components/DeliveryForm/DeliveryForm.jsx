import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { Form } from 'react-router-dom'
import AddressCard from './AddressCard'

const DeliveryForm = () => {
const handleSubmit=(e)=>{
e.preventDefault();
const data= new FormData(e.currentTarget);

const address={
    firstName:data.get('firstname'),
    lastName:data.get('lastname'),
    address:data.get('address'),
    city:data.get('city'),
    zip:data.get('postalcode'),
    phone:data.get('phone'),
}
return address
}
console.log(handleSubmit())
  return (
    <div>
        <Grid container spacing={4}>
            <Grid item xs={6} sm={3} className='overflow-y-scroll'>
            <Typography>Delivery Address</Typography>
             </Grid>
            <Grid className='p-6' item xs={6} sm={9} >
                <div>
            <Typography>Delivery Form</Typography>
            </div>
            <Box>
            <form onClick={handleSubmit}>   
            <Grid className='py-3' container spacing={4} >
            
                <Grid item xs={12} sm={6}>
                    <TextField
                    label='First Name'
                    required
                    name='firstname'
                    id='firstname'
                    autoComplete='given-name'
                    fullWidth
                   />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                    label='Last Name'
                    required
                    name='lastname'
                    id='lastname'
                    type='given-name'
                    fullWidth
                   />
                   </Grid>
            
                <Grid item xs={12}>
                    <TextField
                    label='Address'
                    required
                    name='address'
                    id='address'
                    multiline
                    rows={4}
                    fullWidth
                   />
                   </Grid>
                   <Grid item xs={12} sm={6}>
                    <TextField
                    label='City'
                    required
                    name='city'
                    id='city'
                    type='given-name'
                    fullWidth
                   />
                   </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                    label='Zip/Postal Code'
                    required
                    name='postalcode'
                    id='postalcode'
                    type='given-name'
                    fullWidth
                   />
                   </Grid>
                 
                <Grid item xs={12} sm={6}>
                    <TextField
                    label='Phone No:'
                    required
                    name='phone'
                    id='phone'
                    type='given-name'
                    fullWidth
                   />
                   </Grid>
                   <Grid  item xs={12} style={{textAlign: "center",paddingTop:'3rem',}}>
               <Button sx={{bgcolor:'#4299E1'}} size={'large'} type='submit' variant='contained'  >Delivery Here</Button>
                   </Grid>
            </Grid>    
                </form>
            
            </Box>
            </Grid>
           
        </Grid>
    </div>
  )
}

export default DeliveryForm