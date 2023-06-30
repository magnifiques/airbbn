"use client";

import { SafeListings, SafeUser } from "@/types";
import { Reservation } from "@prisma/client";
import React, { useMemo } from "react";
import { categories } from "../Navbar/Categories";
import Container from "../Container";
import ListingHead from "./ListingHead";
import ListingInfo from "./ListingInfo";

type Props = {
  reservation?: Reservation[];
  currentUser?: SafeUser | null;
  listing: SafeListings & {
    user: SafeUser;
  };
};

const ListingClient = ({ listing, currentUser }: Props) => {
  const category = useMemo(() => {
    return categories.find((item) => item.label === listing.category);
  }, [listing.category]);

  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-6">
          <ListingHead
            title={listing.title}
            imageSrc={listing.imgSrc}
            locationValue={listing.locationValue}
            id={listing.id}
            currentUser={currentUser}
          />
          <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">
            <ListingInfo
              user={listing.user}
              category={category}
              description={listing.description}
              roomCount={listing.roomCount}
              bathroomCount={listing.bathroomCount}
              guestCount={listing.guestCount}
              locationValue={listing.locationValue}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ListingClient;
