"use client";

import { useShoppingCart } from "use-shopping-cart";

import { useToast } from "@/components/ui/use-toast";

export const AddToCartBtn = ({
  btnStyles,
  text,
  icon,
  id,
  currency,
  name,
  description,
  images,
  price,
  price_id,
}) => {
  const { toast } = useToast();
  const { addItem } = useShoppingCart();

  const bike = {
    id,
    currency,
    name,
    description,
    images,
    price,
    price_id,
  };

  return (
    <button
      onClick={() => {
        addItem(bike);
        toast({ title: `${name} has been added to the cart` });
      }}
      type="button"
      className={`${btnStyles}`}
    >
      <div>{text}</div>
      <div>{icon}</div>
    </button>
  );
};
