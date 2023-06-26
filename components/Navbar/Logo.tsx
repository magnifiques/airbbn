"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <Image
      onClick={() => router.push("/")}
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
