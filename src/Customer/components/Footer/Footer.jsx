import { Button } from '@headlessui/react'
import { Grid, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (

    <Grid
    className="bg-green-950 text-white text-center mt-10 p-5"
    container
    sx={{bgColor:'green' , mt:'auto'}}
    >
    <Grid item xs={12} sm={6} md={3}>
    <Typography className='pb-5' variant='h-6'>Company</Typography>
    <div>
<Button>About </Button>
    </div>
    <div>
    <Button>Blog</Button>
        </div>
        <div>
        <Button>Job </Button>
        </div>
        <div>
        <Button>Partners</Button>
        </div>
        <div>
        <Button>Press</Button>
        </div>
        <div>
        <Button>Contact</Button>
        </div>
    </Grid>

    </Grid>
  )
}

export default Footer