"use client";

import Image from "next/image";

const Logo = () => {
  return (
    <Image
      width={100}
      height={100}
      alt="logo"
      className="hidden md:block cursor-pointer"
      src="/logo2.png"
    />
  );
};

//8241e3
export default Logo;
