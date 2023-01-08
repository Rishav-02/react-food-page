import { categories } from "../data/data.js";

// Bottom most of the app is the category
const Category = () => {
  return (
    //Main div container
    <div className="max-w-[1640px] m-auto px-4 pt-8">
    
      <h1 className="text-green-500 font-bold text-4xl text-center">
        Select the Category
      </h1>
      {/* Categories, this div control image and name change */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8">

      {/* key={index} to remove warning */}
      {/* Inside this div content and images  */}
        {categories.map((item, index) => (
          <div
            key={index}
            className="bg-gray-200 rounded-lg p-4 flex justify-between items-center"
          >
            <h2 className="font-bold sm:text-xl ">{item.name}</h2>
            <img src={item.image} alt={item.id} className="w-20" />
          </div>
        ))}
      </div>
    </div>
  );
};


export default Category;