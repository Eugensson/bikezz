import Link from "next/link";
import {
  RiYoutubeFill,
  RiFacebookBoxFill,
  RiInstagramFill,
  RiPinterestFill,
  RiTwitterXFill,
} from "react-icons/ri";

import { Input } from "@/components/ui/input";

export const Footer = () => {
  return (
    <footer className="pt-12 xl:pt-24 bg-primary text-white text-center">
      <div className="container mx-auto">
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="capitalize leading-tight mb-2">
              Subscribe to our newsletter
            </h2>
            <p className="text-white/60">
              Be the first to get the latest news about trends, promotions and
              much more!
            </p>
          </div>
          <form className="flex flex-col xl:flex-row items-center gap-5 w-full max-w-[720px] mx-auto">
            <Input placeholder="Your email address" />
            <button
              type="submit"
              className="btn btn-accent w-full xl:max-w-[150px] h-[60px]"
            >
              Join
            </button>
          </form>
          <ul className="flex items-center gap-8 mx-auto mb-10 xl:mb-20 text-[20px] xl:text-[40px] text-white/60">
            <li className="">
              <Link href="" className="">
                <RiYoutubeFill />
              </Link>
            </li>
            <li className="">
              <Link href="" className="">
                <RiFacebookBoxFill />
              </Link>
            </li>
            <li className="">
              <Link href="" className="">
                <RiInstagramFill />
              </Link>
            </li>
            <li className="">
              <Link href="" className="">
                <RiPinterestFill />
              </Link>
            </li>
            <li className="">
              <Link href="" className="">
                <RiTwitterXFill />
              </Link>
            </li>
          </ul>
        </div>
        <div className="py-6 border-t border-white/5 text-white/60">
          Copyright &copy; 2024 Bikezz. All right reserved.
        </div>
      </div>
    </footer>
  );
};
