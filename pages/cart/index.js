import React, { Component, useState } from "react";
import { useCart } from "../../contexts/CartContext";

function CartPage() {
  const {
    cartItems,
    totalPrice,
    totalItems,
    coupon,
    isUsingCoupon,
    alterProductAmount,
    deleteProduct,
    addCoupon,
  } = useCart();

  console.log()

  return (
    <>
        Preço: {cartItems.lenght}
    </>
  );
}

export default CartPage;
