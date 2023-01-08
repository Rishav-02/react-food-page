import React, { useState } from "react";
import { data } from "../data/data.js";

// All filter function and images are shown here
const Food = () => {

  //State Hook
  const [foods, setFoods] = useState(data);

  //Filter by Type burgers/pizza/etc
  const filterType = (type) => {
    setFoods(
      data.filter((item) => {
        return item.category === type;
      })
    );
  };

  //Filter by Price
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };


  return (
    <div className="max-w-[1640px] m-auto px-4 py-12 ">
      <h1 className="text-black-600 font-bold text-4xl text-center">
        Top Rated Menu Items{" "}
      </h1>

      {/* Filter Row */}
      <div className="flex flex-col lg:flex-row justify-between">

        {/* Filter Type */}
        <div>
          <p className="font-bold text-gray-700 pl-2 pt-4">Filter Type</p>
          {/* This div take care of buttons and all functions */}
          <div className="flex justify-between flex-wrap w-full ">
          {/* when click button(All) then setFoods function run and show all data */}
            <button
              onClick={() => setFoods(data)}
              className="m-1 border-green-500 text-green-500 focus:bg-yellow-500 focus:text-white "
            >
              All
            </button>
            {/* when click rest of 4 buttons then filterType function run and filter the data */}
            <button
              onClick={() => filterType("burger")}
              className="m-1 border-green-500 text-green-500 focus:bg-yellow-500 focus:text-white"
            >
              Burger
            </button>
            <button
              onClick={() => filterType("pizza")}
              className="m-1 border-green-500 text-green-500 focus:bg-yellow-500 focus:text-white "
            >
              Pizza
            </button>
            <button
              onClick={() => filterType("salad")}
              className="m-1 border-green-500 text-green-500 focus:bg-yellow-500 focus:text-white "
            >
              Salad
            </button>
            <button
              onClick={() => filterType("chicken")}
              className="m-1 border-green-500 text-green-500 focus:bg-yellow-500 focus:text-white "
            >
              Chicken
            </button>
            <button
              onClick={() => filterType("dessert")}
              className="m-1 border-green-500 text-green-500 focus:bg-yellow-500 focus:text-white "
            >
              Dessert
            </button>
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className="font-bold text-gray-700 flex-wrap pl-2 pt-4">Filter Price</p>
          <div className="flex justify-between flex-wrap w-full">
            <button
              onClick={() => filterPrice("Rs 199")}
              className="m-1 border-green-500 text-green-500 focus:bg-yellow-500 focus:text-white"
            >
               Rs 199
            </button>
            <button
              onClick={() => filterPrice("Rs 299")}
              className="m-1 border-green-500 text-green-500 focus:bg-yellow-500 focus:text-white"
            >
                Rs 299
            </button>
            <button
              onClick={() => filterPrice("Rs 399")}
              className="m-1 border-green-500 text-green-500 focus:bg-yellow-500 focus:text-white"
            >
                Rs 399
            </button>
            <button
              onClick={() => filterPrice("Rs 499")}
              className="m-1 border-green-500 text-green-500 focus:bg-yellow-500 focus:text-white"
            >
                Rs 499
            </button>
          </div>
        </div>
      </div>

      {/* Display food images, All images control by this div */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
        {foods.map((item, index) => (
          
          <div
          // hover:scale-105 and duration-300 tells when we hover on image then images react after 0.3s or 300milliseconds duration.
            key={index}
            className="border shadow-lg cursor-pointer rounded-lg hover:scale-105 duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[300px] object-cover rounded-t-lg"
            />
            {/* Inside This div name and price are take */}
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className="bg-orange-500 text-white p-1 rounded-full flex text-center">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
