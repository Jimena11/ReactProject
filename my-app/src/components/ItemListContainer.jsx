import ProductCard from "./ProductCard";
const ItemListContainer = () => {
  function onAdd(count) {
    console.log(`Se han seleccionado ${count} productos`);
  }
  return (
    <div>
      <ProductCard />
    </div>
  );
};

export default ItemListContainer;
