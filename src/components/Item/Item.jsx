import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const Item = ({ id, name, imageSrc, imageAlt, price, marca, stock }) => {
  return (
    <div>
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
      <div className='text-sm flex justify-between align-center'>
        <h3>Stock disponible: {stock}</h3>
        <Button><Link to={`/item/${id}`} className='Option'>Detalle</Link></Button>
      </div>
    </div>
  );
};

export default Item;