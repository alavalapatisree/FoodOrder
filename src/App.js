import './App.css';
import SignUp from './Signup';
import { Route,Routes } from 'react-router-dom';
import Home from './home/Home';
import Login from './login';
import RestaurantDetails from './home/Restaurantpage';
import { CartProvider } from './home/cartcontext';
import Cart from './home/cart';
import OrderPlaced from './home/orderplaced';

function App() {
  return (
    <>
    <CartProvider>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/restaurant/:id' element={<RestaurantDetails/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/cart/order' element={<OrderPlaced/>}/>
      </Routes>
    </CartProvider>
    </>
    
    
  );
}

export default App;
