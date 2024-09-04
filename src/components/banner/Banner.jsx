

function Banner() {
  return (
    <div className="relative h-[300px] bg-cover bg-center" style={{ backgroundImage: "url('https://i.postimg.cc/HLz4xy1K/banner-1.jpg')" }}>

      <div className="absolute inset-0 bg-black opacity-80"></div>

      <div className="relative h-full flex items-center md:justify-between justify-center md:gap-0 gap-5 md:flex-row flex-col md:px-28">
          <h1 className="md:text-5xl text-4xl font-bold text-[#FFFFFF]">Study In USA</h1> 
          <h5 className="text-base font-normal text-[#FFFFFF]">Home /Study Distention/USA</h5>
      </div>

    </div>
  );
}

export default Banner;
