import logo from './logo.svg';
import './App.css';
import Navigation from './Customer/components/Navigation/Navigation';
import HomePage from './Customer/components/Pages/HomePage';
import Footer from './Customer/components/Footer/Footer';
import Product from './Customer/components/Product/Product';
import ProductDetails from './Customer/components/ProductDetails/ProductDetails';
import Cart from './Customer/components/Pages/Cart/Cart';
import { Box } from '@mui/material';
import Checkout from './Customer/components/Pages/Checkout/Checkout';
import Order from './Customer/components/Order/Order';





function App() {
  return (
  <div className='flex flex-col min-h-screen justify-between'>
    <Navigation />
    <Box className='max-w-full' sx={{  }}>
    
   <div>
    {/* /<HomePage/> <Product /> <ProductDetails /> <Cart/> <Checkout/> */}
    <Order/>
    </div>

    </Box>
    <Footer/>
    </div>
  );
}

export default App;
