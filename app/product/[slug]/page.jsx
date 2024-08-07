import {
  Bike,
  Clock,
  PackageCheck,
  RefreshCw,
  ChevronLeft,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { client, urlFor } from "@/app/lib/sanity";
import { AddToCartBtn } from "@/components/AddToCartBtn";

const getData = async (slug) => {
  const query = `*[_type == 'product' && slug.current == '${slug}'][0] {
  _id,
  images,
  price,
  price_id,
  name,
  description,
  "slug": slug.current,
  "category": categories->{name}
  }`;

  const data = await client.fetch(query);

  return data;
};

const ProductDetails = async ({ params }) => {
  const bike = await getData(params.slug);

  return (
    <section className="pt-24 pb-32">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-14">
          <div className="xl:flex-1 h-[460px] bg-primary/5 xl:w-[700px] xl:h-[540px] flex justify-center items-center">
            <Image
              priority
              src={urlFor(bike.images[0]).url()}
              alt={bike.name}
              width={473}
              height={298}
            />
          </div>
          <div className="flex-1 flex flex-col justify-center items-start gap-10">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <ChevronLeft size={20} />
              Back to home
            </Link>
            <div className="flex flex-col items-start gap-6">
              <div>
                <h3>{bike.name}</h3>
                <p className="text-lg font-semibold">${bike.price}</p>
              </div>
              <p>{bike.description}</p>
              <AddToCartBtn
                price_id={bike.price_id}
                name={bike.name}
                currency="USD"
                description={bike.description}
                images={bike.images}
                price={bike.price}
                btnStyles="btn btn-accent"
                text="Add to cart"
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <PackageCheck size={20} className="text-accent" />
                <p>Free shipping on orders over $130</p>
              </div>
              <div className="flex items-center gap-2">
                <RefreshCw size={20} className="text-accent" />
                <p>Free return for 30 days</p>
              </div>
              <div className="flex items-center gap-2">
                <Bike size={20} className="text-accent" />
                <p>
                  The bicycles are partially assembled and benefit from
                  transport insurance
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={20} className="text-accent" />
                <p>Fast delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
