

function Banner() {
  return (
    <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: "url('https://i.postimg.cc/HLz4xy1K/banner-1.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-80"></div>
      
      {/* Content */}
      <div className="relative h-full flex items-center justify-between px-8">
        {/* Left Text */}
        <div className="text-white text-3xl font-bold">
          Twitter
        </div>

        {/* Right Text */}
        <div className="text-white text-3xl font-bold">
          Twitter
        </div>
      </div>
    </div>
  );
}

export default Banner;
