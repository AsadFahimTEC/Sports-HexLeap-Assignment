const Banners = () => {
  return (
    <div className="mt-4">
      <div className="p-4 md:p-8">
        <h1 className="text-2xl text-[#000000] md:text-4xl font-bold mb-4">
          Sports
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mr-4 ml-4">
          {/* Image 1 */}
          <div className="flex flex-col">
            <img
              src="https://i.ibb.co/jy2RyZk/dc33760174d3f67737f6e318d0f118ff.jpg"
              className="w-60 h-72"
              alt=""
            />
            <div className="mt-2">
              <h1 className="text-[#000000]">Sacramento River Cats</h1>
              <div className="flex gap-8">
                <h6 className="text-[#525965]">Total events</h6>
                <h6 className="text-[#525965]">Sport</h6>
              </div>
              <div className="flex gap-8">
                <h6 className="text-[#000000]">48 Events</h6>
                <h6 className="text-[#000000] ml-2">Baseball</h6>
              </div>
            </div>
          </div>
          {/* Image 2 */}
          <div className="flex flex-col">
            <img
              src="https://i.ibb.co/7Y0dTqT/76e2b366b2456bbd169b0c3c9525252c.jpg"
              className="w-60 h-72"
              alt=""
            />
            <div className="mt-2">
              <h1 className="text-[#000000]">Las Vegas Aviator</h1>
              <div className="flex gap-8">
                <h6 className="text-[#525965]">Total events</h6>
                <h6 className="text-[#525965]">Sport</h6>
              </div>
              <div className="flex gap-8">
                <h6 className="text-[#000000]">28 Events</h6>
                <h6 className="text-[#000000] ml-2">Baseball</h6>
              </div>
            </div>
          </div>
          {/* Image 3 */}
          <div className="flex flex-col">
            <img
              src="https://i.ibb.co/Xp3nzpH/b2fcf21c696811f745109da24a740d73.jpg"
              className="w-60 h-72"
              alt=""
            />
            <div className="mt-2">
              <h1 className="text-[#000000]">new jersey devils</h1>
              <div className="flex gap-8">
                <h6 className="text-[#525965]">Total events</h6>
                <h6 className="text-[#525965]">Sport</h6>
              </div>
              <div className="flex gap-8">
                <h6 className="text-[#000000]">15 Events</h6>
                <h6 className="text-[#000000] ml-2">ice hockey</h6>
              </div>
            </div>
          </div>
          {/* Image 4 */}
          <div className="flex flex-col">
            <img
              src="https://i.ibb.co/7Y0dTqT/76e2b366b2456bbd169b0c3c9525252c.jpg"
              className="w-60 h-72"
              alt=""
            />
            <div className="mt-2">
              <h1 className="text-[#000000]">Las Vegas Aviators</h1>
              <div className="flex gap-8">
                <h6 className="text-[#525965]">Total events</h6>
                <h6 className="text-[#525965]">Sport</h6>
              </div>
              <div className="flex gap-8">
                <h6 className="text-[#000000]">28 Events</h6>
                <h6 className="text-[#000000] ml-2">Baseball</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="rounded p-2 text-white bg-[#2C9CF0]">
          See More
        </button>
      </div>
    </div>
  );
};

export default Banners;
