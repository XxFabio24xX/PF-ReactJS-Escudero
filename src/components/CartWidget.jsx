import React, { useContext } from 'react'
import { Badge } from 'antd';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

function CartWidget() {
  const { totalQuantity } = useContext(CartContext);

  return (
    <div className="hidden md:flex md:gap-4">
        <Badge className='text-White' size='small' count={totalQuantity}>
            <Link to={"/cart"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-basket"><path d="m15 11-1 9"/><path d="m19 11-4-7"/><path d="M2 11h20"/><path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"/><path d="M4.5 15.5h15"/><path d="m5 11 4-7"/><path d="m9 11 1 9"/></svg>    
            </Link>
        </Badge>               
    </div>
  )
}

export default CartWidget
