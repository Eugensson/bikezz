"use client";

import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart";
import { FaPlus, FaMinus, FaX } from "react-icons/fa6";

import { urlFor } from "@/app/lib/sanity";

export const CartItem = ({ item }) => {
  const { removeItem, incrementItem, decrementItem } = useShoppingCart();

  return (
    <div className="flex justify-between items-center mb-4 w-full h-[120px] border-b">
      <div className="relative w-[110px] h-[110px]">
        <Image
          priority
          src={urlFor(item.images[0]).url()}
          alt={item.name}
          fill
          sizes="(max-w-[110px] 110px, 110px)"
          className="object-contain"
        />
      </div>
      <div className="w-full max-w-[180px] flex flex-col justify-center gap-4">
        <div className="flex justify-between items-center">
          <h5>{item.name}</h5>
          <button type="button" onClick={() => removeItem(item.id)}>
            <FaX className="text-sm" />
          </button>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button type="button" onClick={() => decrementItem(item.id)}>
              <FaMinus className="text-[10px]" />
            </button>
            <div>{item.quantity}</div>
            <button type="button" onClick={() => incrementItem(item.id)}>
              <FaPlus className="text-[10px]" />
            </button>
          </div>
          <div className="font-semibold text-balance text-right">
            ${item.price * item.quantity}
          </div>
        </div>
      </div>
    </div>
  );
};
