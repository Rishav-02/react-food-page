// Front 1st image are display by this file
const Hero = () => {
  return (
    // This div capture whole image if we will not give 1640px then after increase size of app the image contracts.
    <div className="max-w-[1640px] mx-auto p-4">
    {/* this div take care of max-height and position */}
      <div className="max-h-[500px] relative">

        {/* Overlay, this div take care of content inside image */}
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center">

          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-yellow-500">
            The<span> Best</span>
          </h1>

          <h1 className="px-5 text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-green-500">
            Foods<span> Delivered</span>
          </h1>
        </div>
        <img
          className="w-full max-h-[500px] object-cover"
          src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg"
          alt="first"
        />
      </div>
    </div>
  );
};


export default Hero;