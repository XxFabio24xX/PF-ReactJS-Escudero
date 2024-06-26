import React, { useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Button, Card } from "antd";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ id, name, imageSrc, imageAlt, price, marca, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item = {
      id,
      name,
      price,
      imageSrc,
      imageAlt,
    };

    addItem(item, quantity);
  };

  return (
    <Card
      style={{ width: 350 }}
      bordered={false}
      className="bg-Baige hover:ring-2 ring-Mogo shadow-lg"
      cover={<img src={imageSrc} alt={imageAlt} />}
    >
      <div className="flex justify-between">
        <div>
          <h3 className="text-m text-Negro font-semibold">{name}</h3>
          <p className="mt-1 text-sm text-gray">{marca}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">${price}</p>
      </div>
      <div className="p-3 flex justify-center align-center">
        {quantityAdded > 0 ? (
          <Button
            type="text"
            className="bg-Mogo text-White hover:ring-2 ring-Mogo"
          >
            <Link to={"/cart"} className="Option">
              Mostrar carrito
            </Link>
          </Button>
        ) : (
          <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
        )}
      </div>
    </Card>
  );
};
export default ItemDetail;