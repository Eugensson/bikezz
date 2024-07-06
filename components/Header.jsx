"use client";

import Link from "next/link";
import { CgShoppingBag } from "react-icons/cg";
import { useShoppingCart } from "use-shopping-cart";

import { Nav } from "@/components/Nav";
import { CartSidebar } from "@/components/CartSidebar";

export const Header = () => {
  const { cartCount, handleCartClick } = useShoppingCart();
  return (
    <header className="bg-white shadow-lg sticky top-0 py-8 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="hover:text-current">
          <h1 className="text-[26px]">
            <span className="text-accent">B</span>ikezz
          </h1>
        </Link>
        <div className="flex items-center gap-[26px]">
          <Nav containerStyles="flex items-center gap-[36px]" />
          <div
            onClick={() => handleCartClick()}
            className="relative cursor-pointer"
          >
            <CgShoppingBag className="text-[26px]" />
            <div className="bg-accent w-[18px] first-line:h-[18px] absolute -right-1 -bottom-1 rounded-full text-white text-sm font-medium flex items-center justify-center">
              {cartCount}
            </div>
          </div>
          <CartSidebar />
        </div>
      </div>
    </header>
  );
};
