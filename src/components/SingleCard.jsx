import React, { useState, useEffect } from "react";
import PriceTag from "./PriceTag";
import Tag from "./Tag";
import AlertMessage from "./AlertMessage";

function SingleCard({ imgSrc, productName, category, productPrice, addToCart, id, setAddedProduct }) {
  const [isInCart, setIsInCart] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const clickHandler = () => {
    addToCart(id);
    setAddedProduct(productName);
    setIsInCart(prevIsInCart => !prevIsInCart);
    setIsVisible(!isInCart);
  };

  const buttonClass = `text-center ${
    isInCart ? "bg-red-600" : "bg-green-700"
  } text-white hover:bg-white hover:text-green-700 transition-all duration-300 border px-8 py-3 rounded-3xl`;

  return (
    <>
      <div className="grid border grid-cols-3 justify-around rounded-lg text-center p-2 gap-4 shadow-2xl">
        <div className="">
          <img className="h-full object-cover aspect-[1/3]" src={imgSrc} alt="" />
        </div>
        <div className="grid col-span-2 text-sm grid-rows-3 items-center justify-center">
          <h3>{productName}</h3>
          <Tag>{category}</Tag>
          <PriceTag>{productPrice}</PriceTag>
          <div>
            <button className={buttonClass} onClick={clickHandler}>
              {isInCart ? "حذف از سبد خرید" : "اضافه به سبد خرید"}
            </button>
          </div>
        </div>
      </div>
      {isVisible && isInCart && (
        <AlertMessage productName={productName} clickHandler={setIsInCart} />
      )}
    </>
  );
}

export default SingleCard;
