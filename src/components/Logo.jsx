import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
    const nav=
    <>
    
    </>
  return (
    <div>
      <Link href={"/"} className="flex items-center space-x-2">
        <Image src={"/assets/logo.png"} height={50} width={40}></Image>
        <h1 className="font-bold">
          Kids <span className="text-secondary">Zone</span>
        </h1>
      </Link>
    </div>
  );
};

export default Logo;
