import { useState } from "react";
import { Button, ConfigProvider, Space } from "antd";
//import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

const ItemCount = ({ initial, stock, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      <div className="flex justify-between align-center p-3">
        <Button type="text" className="bg-Mogo text-White" onClick={decrement} shape="circle"> - </Button>
        <h4>{quantity}</h4>
        <Button type="text" className="bg-Mogo text-White" onClick={increment} shape="circle"> + </Button>
      </div>
      <div>
         <Button type="text" className="bg-Mogo text-White" onClick={() => onAdd(quantity)} disabled={!stock}> Agregar al carrito </Button>
      </div>
    </div>
  );
};

export default ItemCount;