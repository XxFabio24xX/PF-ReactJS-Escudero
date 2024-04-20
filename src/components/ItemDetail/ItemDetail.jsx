import React, { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Button, Card } from 'antd';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ id, name, imageSrc, imageAlt, price, marca, stock }) => {

  const [quantityAdded, setQuantityAdded] = useState(0);

  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    
    const item = {
      id, name, price
    }

    addItem(item, quantity);
  }
  
  return (
    <Card style={{width: 400}}>
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-100">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="h-full w-auto object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            {name}
          </h3>
          <p className="mt-1 text-sm text-gray-500">{marca}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{price}</p>
      </div>
      <div className='p-3 flex justify-center align-center'>
        {
          quantityAdded > 0 ? (
            <Button><Link to={"/cart"} className="Option">Finalizar Compra</Link></Button>
          ) : (
            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
          )
        }
      </div>
    </Card>
  );
}
export default ItemDetail;