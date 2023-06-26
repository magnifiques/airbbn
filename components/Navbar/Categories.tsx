"use client";

import React from "react";
import Container from "../Container";

import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import CategoryBox from "./CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is closed to the beach",
  },
  {
    label: "Windmill",
    icon: GiWindmill,
    description: "This property has Windmill",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This property is Modern",
  },
  {
    label: "Countryside",
    icon: TbMountain,
    description: "This property is in Countryside",
  },
  {
    label: "Pools",
    icon: TbPool,
    description: "This property has a beautiful pool",
  },
  {
    label: "Island",
    icon: GiIsland,
    description: "This property is on the islands",
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
    description: "This property is near the lake",
  },
  {
    label: "Skiing",
    icon: FaSkiing,
    description: "This property has skiing activities",
  },
  {
    label: "Castles",
    icon: GiCastle,
    description: "This property is in an ancient castle",
  },
  {
    label: "Caves",
    icon: GiCaveEntrance,
    description: "This property is in a spooky cave",
  },
  {
    label: "Arctic",
    icon: BsSnow,
    description: "This property is in arctic environment",
  },
  {
    label: "Desert",
    icon: GiCactus,
    description: "This property is in the desert",
  },
  {
    label: "Barns",
    icon: GiBarn,
    description: "This property is in barns",
  },
  {
    label: "Lux",
    icon: IoDiamond,
    description: "This property is new and luxurious",
  },
];

type Props = {};

function Categories({}: Props) {
  const params = useSearchParams();
  const selectedCategory = params?.get("category");
  const pathName = usePathname();

  const isMainPage = pathName === "/";

  if (!isMainPage) return null;
  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((category) => (
          <CategoryBox
            key={category.label}
            label={category.label}
            selected={selectedCategory === category.label}
            icon={category.icon}
            description={category.description}
          />
        ))}
      </div>
    </Container>
  );
}

export default Categories;
