import { useEffect, useState } from "react";
import CardContainer from "./components/cardContainer";
import SingleCard from "./components/SingleCard";
import ToggleOptions from "./components/ToggleOptions";

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState("");
  const [isModalOn, setIsModalOn] = useState(false);
  const [addedProduct, setAddedProduct] = useState("");




  const getProducts = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products?limit=20");
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error(error,":با مشکل برخوردیم");
    }
  };

  const getCategories = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products/categories");
      const data = await res.json();
      setCategories([...data, "All"]);
    } catch (error) {
      console.error(error,":با مشکل برخوردیم");
    }
  };

  const addToCart = async (id) => {
    try {
      await fetch("https://fakestoreapi.com/carts", {
        method: "POST",
        body: JSON.stringify({
          userId: 1,
          date: "2020-02-03",
          products: [{ productId: id, quantity: 1 }, { productId: id, quantity: 1 }],
        }),
      });
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  return (
    <main>
      <ToggleOptions categories={categories} setFilteredCategory={setFilteredCategory} />
      <CardContainer addedProduct={addedProduct}>
        {products
          .filter((item) => item.category.includes(filteredCategory))
          .map((item) => (
            <SingleCard
              setAddedProduct={setAddedProduct}
              id={item.id}
              key={item.id}
              imgSrc={item.image}
              productName={item.title}
              addToCart={addToCart}
              category={item.category}
              productPrice={item.price}
            />
          ))}
      </CardContainer>
    </main>
  );
}

export default App;
