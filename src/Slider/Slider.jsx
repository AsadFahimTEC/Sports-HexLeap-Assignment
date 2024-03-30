const Slider = () => {
  return (
    <div className="mt-4 flex flex-col items-center mb-16">
      <h6 className="text-[#000000] text-center text-3xl">
        Collection Spotlight
      </h6>
      <h6 className="text-[#000000] text-center mr-4 ml-4">
        Discover extraordinary moments with our Spotlight Collection
        metatickets—exclusive <br /> access to premium events for an
        unforgettable experience. Grab yours today!
      </h6>
      {/* Images */}
      <div className="flex flex-wrap justify-center gap-8 mt-8">
        <img
          src="https://i.ibb.co/943f8Wc/a2c7e5def5b347470305864869a894b6.jpg"
          className="w-60 h-auto"
          alt=""
        />
        <img
          src="https://i.ibb.co/j4JjDFL/b6e3aeda879dc6f22f94711c788789b5.jpg"
          className="w-60 h-auto"
          alt=""
        />
        <img
          src="https://i.ibb.co/943f8Wc/a2c7e5def5b347470305864869a894b6.jpg"
          className="w-60 h-auto"
          alt=""
        />
      </div>
      {/* Details */}
      <div className="flex flex-wrap justify-center mt-8 gap-8">
        <div className="flex flex-col items-center text-center">
          <h6 className="text-[#000000]">Las Vegas Aviators</h6>
          <h6 className="text-[#525965]">
            Oct 15 Sun 4:30 PM <br />
            Las Vegas Ballpark, Las Vegas, <br />
            Nevada
          </h6>
          <button className="bg-[#1D1D1F] text-white p-2 rounded mt-1 -ml-16">
            Take Flight Collection
          </button>
        </div>
        <div className="flex flex-col items-center text-center">
          <h6 className="text-[#000000]">Las Vegas Aviators</h6>
          <h6 className="text-[#525965]">
            Oct 15 Sun 4:30 PM <br />
            Las Vegas Ballpark, Las Vegas, <br />
            Nevada
          </h6>
          <button className="bg-[#1D1D1F] text-white p-2 rounded mt-1 -ml-16">
            Take Flight Collection
          </button>
        </div>
        <div className="flex flex-col items-center text-center">
          <h6 className="text-[#000000]">Las Vegas Aviators</h6>
          <h6 className="text-[#525965]">
            Oct 15 Sun 4:30 PM <br />
            Las Vegas Ballpark, Las Vegas, <br />
            Nevada
          </h6>
          <button className="bg-[#1D1D1F] text-white p-2 rounded mt-1 -ml-16">
            Take Flight Collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
