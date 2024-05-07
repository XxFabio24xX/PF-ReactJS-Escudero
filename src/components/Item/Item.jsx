import React from 'react';
import { Button, Card } from 'antd';
import { Link } from 'react-router-dom';

const Item = ({ id, name, imageSrc, imageAlt, price, marca, stock }) => {
  return (
    <Card bordered={false} className='bg-Baige hover:ring-2 hover:scale-105 ring-Mogo' cover={
      <img
      src={imageSrc}
      alt={imageAlt}
      />
    }>
      <div className="mt-1 flex justify-between">
        <div>
          <h3 className="text-m text-Negro font-semibold">
            {name}
          </h3>
          <p className="mt-1 text-sm text-gray">{marca}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">${price}</p>
      </div>
      <div className='text-sm flex justify-between align-center'>
        <h3>Stock disponible: {stock}</h3>
        <Button type="text" className="bg-Mogo text-White hover:ring-2 ring-Mogo"><Link to={`/item/${id}`} className='Option'>Detalle</Link></Button>
      </div>
    </Card>
  );
};

export default Item;