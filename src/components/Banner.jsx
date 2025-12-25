import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="md:flex items-center py-12">
      <div className="flex-1 items-center space-y-4 text-center md:text-start">
        <h1 className="font-bold text-4xl">
          Have a beautiful future to{" "}
          <span className="text-primary"> your son</span>
        </h1>
        <p>Buy every toy upto 15% discount</p>
        <button className="btn-primary btn outline-primary">Explore Products</button>
      </div>
      <Image
        className="flex-1"
        src={"/assets/hero.png"}
        height={600}
        width={600}
      ></Image>
    </div>
  );
};

export default Banner;
