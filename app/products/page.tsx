import React from "react";
import Button from "./Button";

const ProductPage = async () => {
  const data = await fetch("http://localhost:3000/api/products", {
    method: "GET",
  });
  const products: any[] = await data.json();

  return (
    <>
      <div>
        {products.map((product) => (
          <p key={product.id}>{product.name}</p>
        ))}
      </div>
      <Button />
    </>
  );
};

export default ProductPage;
