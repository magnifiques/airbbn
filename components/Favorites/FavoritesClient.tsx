import { SafeListings, SafeUser } from "@/types";
import { Listing } from "@prisma/client";
import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import ListingCard from "../Listings/ListingCard";

type Props = {
  favorites: SafeListings[];
  currentUser?: SafeUser | null;
};

const FavoritesClient = ({ currentUser, favorites }: Props) => {
  return (
    <Container>
      <Heading title="Favorites" subtitle="Your Beloved Properties" />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {favorites.map((favorite, index) => (
          <ListingCard data={favorite} key={index} currentUser={currentUser} />
        ))}
      </div>
    </Container>
  );
};

export default FavoritesClient;
