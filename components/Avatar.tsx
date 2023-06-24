"use client";

import Image from "next/image";
import React from "react";

type AvatarProps = {
  imgSrc: string | null | undefined;
};

const Avatar = ({ imgSrc }: AvatarProps) => {
  return (
    <Image
      className="rounded-full"
      width={30}
      height={30}
      alt="avatar"
      src={imgSrc || "/placeholder.jpg"}
    />
  );
};

export default Avatar;
