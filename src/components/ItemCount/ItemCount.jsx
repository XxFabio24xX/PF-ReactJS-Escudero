import { useState } from "react";
import { Button } from "antd";

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
        <Button
          type="text"
          className="bg-Mogo text-White hover:ring-2 ring-Mogo"
          onClick={decrement}
          shape="circle"
        >
          {" "}
          -{" "}
        </Button>
        <h4 className="font-semibold">{quantity}</h4>
        <Button
          type="text"
          className="bg-Mogo text-White hover:ring-2 ring-Mogo"
          onClick={increment}
          shape="circle"
        >
          {" "}
          +{" "}
        </Button>
      </div>
      <div>
        <Button
          type="text"
          className="bg-Mogo text-White hover:ring-2 ring-Mogo"
          onClick={() => onAdd(quantity)}
          disabled={!stock}
        >
          {" "}
          Agregar al carrito{" "}
        </Button>
      </div>
    </div>
  );
};

export default ItemCount;