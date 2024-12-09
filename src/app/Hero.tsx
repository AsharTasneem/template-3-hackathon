import Image from "next/image";
export default function HeroSection() {
    return (
      <section className=" w-[95%] m-auto roboto my-18   ">
        {/* Featured Label */}
        <div className=" text-2xl font-[500]  text-black p-4">
          Featured
        </div>
  
        {/* Hero Image */}
        <div className="">
            <Image src={require("../../public/runner.jpg")} alt="Running-outdoors" height={700} width={1344}/>
            {/* // className="w-full h-full object-cover */}
        </div>
  
        {/* Text Content */}
        <div className="text-center p-6">
          <h1 className="text-5xl md:text-4xl font-[500] mb-4">
            STEP INTO WHAT FEELS GOOD
          </h1>
          <p className="text-gray-500 mb-6">
            Cause everyone should know the feeling of running in that perfect pair.
          </p>
          <button className="px-6 py-2 bg-black text-white font-medium rounded-full hover:bg-gray-800">
            Find Your Shoe
          </button>
        </div>
      </section>
    );
  }
  