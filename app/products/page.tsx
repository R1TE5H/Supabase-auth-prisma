import React from "react";

const ProductPage = async () => {
  const data = await fetch("http://localhost:3000/api/products", {
    method: "GET",
  });
  const products = await data.json();

  return <div>{products.name}</div>;
};

export default ProductPage;
