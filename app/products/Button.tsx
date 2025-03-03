"use client";
import React from "react";

const Button = () => {
  const handleClick = async () => {
    const response = await fetch("http://localhost:3000/api/products", {
      method: "POST",
      body: JSON.stringify({ name: "Mango", price: 1.7 }),
    });
    const { error } = await response.json();
    console.log(error);
  };

  return (
    <button className="bg-amber-600 p-5" onClick={handleClick}>
      Add a Product
    </button>
  );
};

export default Button;
