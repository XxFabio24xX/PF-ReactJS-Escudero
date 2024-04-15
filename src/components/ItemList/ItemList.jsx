import Item from "../Item/Item";

const ItemList = ( {products} ) => {
  
  console.log({products});
  return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map(prod => <Item key={prod.id} {...prod} className="group relative"/>)}
    </div>
  );
};

export default ItemList;