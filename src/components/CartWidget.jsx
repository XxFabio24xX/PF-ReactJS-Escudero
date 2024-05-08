import React, { useContext } from 'react'
import { Badge } from 'antd';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import 'boxicons';

function CartWidget() {
  const { totalQuantity } = useContext(CartContext);

  return (
    <div className="hidden md:flex md:gap-4 hover:scale-110">
        <Badge className='text-White' size='small' count={totalQuantity}>
            <Link to={"/cart"}>
              <box-icon name='cart' type='solid' color='#ffffff' ></box-icon>
            </Link>
        </Badge>               
    </div>
  )
}

export default CartWidget