"use client";

import { useState, useEffect } from "react";

import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Bike } from "@/components/Bike";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export const BikeCategories = ({ bikes }) => {
  const [category, setCategory] = useState("all");
  const [filteredBikes, setFilteredBikes] = useState([]);
  const [price, setPrice] = useState(900);

  useEffect(() => {
    const filtered = bikes.filter((bike) => {
      const categoryMatch =
        category === "all"
          ? bikes
          : bike.categories.some((cat) => cat.name === category);
      const priceMatch = bike.price <= price;
      return categoryMatch && priceMatch;
    });

    setFilteredBikes(filtered);
  }, [category, price, bikes]);

  return (
    <section className="min-h-[1200px] py-10">
      <div className="container mx-auto">
        <div className="flex flex-col">
          <aside className="w-full p-4 mb-8 xl:w-[300px] xl:h-[84vh] xl:fixed">
            <RadioGroup
              defaultValue="all"
              className="flex flex-col gap-6 mb-12"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="all"
                  id="all"
                  onClick={() => setCategory("all")}
                />
                <label htmlFor="all">All</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="road"
                  id="road"
                  onClick={() => setCategory("road")}
                />
                <label htmlFor="road">Road</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="professional"
                  id="professional"
                  onClick={() => setCategory("professional")}
                />
                <label htmlFor="professional">Professional</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="extreme"
                  id="extreme"
                  onClick={() => setCategory("extreme")}
                />
                <label htmlFor="extreme">Extreme</label>
              </div>
            </RadioGroup>
            <div className="max-w-56">
              <div className="text-lg mb-4 font-medium">
                Max Price:{" "}
                <span className="text-accent font-semibold ml-2">${price}</span>
                <span className="ml-2">
                  {filteredBikes > 1
                    ? `${filteredBikes.length} items`
                    : filteredBikes === 0
                      ? `${filteredBikes.length} items`
                      : `${filteredBikes.length} items`}
                </span>
              </div>
              <Slider
                defaultValue={[900]}
                max={1000}
                step={1}
                onValueChange={(val) => setPrice(val[0])}
              />
            </div>
          </aside>
          <ul className="w-full xl:w-[1050px] ml-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]">
            {filteredBikes.map((bike) => (
              <li key={bike.price_id}>
                <Bike bike={bike} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
