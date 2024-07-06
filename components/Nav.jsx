"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Home", path: "/" },
  { label: "Our bikes", path: "/our-bikes" },
];

export const Nav = ({ containerStyles }) => {
  const pathname = usePathname();

  return (
    <nav className={`${containerStyles}`}>
      {links.map(({ label, path }) => (
        <Link
          key={label}
          href={path}
          className={`${path === pathname && "text-accent"} capitalize`}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
};
