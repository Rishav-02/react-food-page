// Three head images are shown by this file
const HeadlineCards = () => {
  return (
    // Main div container,if app resize to medium then grid divides into 3 columns 
    <div className="max-w-[1640px] mx-auto p-4 py-8 grid md:grid-cols-3 gap-4">

      {/* All 3 Cards have same className and properties */}
      {/* Card 1 */}
      <div className="rounded-xl relative">
        {/* Overlay, this div is for content inside First image */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Don't Starve, Just Order</p>
          <p className="px-2">We serve 24 X 7</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[400px] w-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60"
          alt="card1"
        />
      </div>
      
      {/* Card 2 */}
      <div className="rounded-xl relative">
        {/* Overlay, this div is for content inside Second image */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">New Restaurants</p>
          <p className="px-2">Added Daily</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[400px] w-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJicXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60"
          alt="card2" />
      </div>

      {/* Card 3 */}
      <div className="rounded-xl relative">
        {/* Overlay, this div is for content inside Third image */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">We Deliver Desserts Too</p>
          <p className="px-2">Tasty Treats</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[400px] w-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc3NlcnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt="card3" />
      </div>

    </div>
  );
};


export default HeadlineCards;