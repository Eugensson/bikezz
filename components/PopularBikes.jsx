import Link from "next/link";

import { client } from "@/app/lib/sanity";
import { PopularBikeCarousel } from "@/components/PopularBikeCarousel";

const getData = async () => {
  const query = `*[_type == 'product' && references(*[_type == 'category' && name == 'popular']._id, categories)] {
  _id,
    name,
    description,
    images,
    price,
    price_id,
    "slug": slug.current,
    "categories": categories[]-> {
    name
    }
}`;
  const data = await client.fetch(query);
  return data;
};

export const PopularBikes = async () => {
  const bikes = await getData();

  return (
    <section className="py-24">
      <div className="container mx-auto">
        <h2 className="text-center">Most popular bikes</h2>
        <p className="capitalize text-center mb-[30px]">
          The world&apos;s premium brands in one destanation.
        </p>
        <PopularBikeCarousel bikes={bikes} />
        <Link href="/our-bikes">
          <button type="button" className="btn btn-accent mx-auto">
            See all bikes
          </button>
        </Link>
      </div>
    </section>
  );
};
