"use client";
import { SafeListings, SafeUser } from "@/types";
import React, { useCallback, useState } from "react";
import Container from "../Container";
import Heading from "../Heading";
import ListingCard from "../Listings/ListingCard";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

type Props = {
  listing: SafeListings[];
  currentUser?: SafeUser | null;
};

const PropertiesClient = ({ currentUser, listing }: Props) => {
  const [deletingId, setDeletingId] = useState("");
  const router = useRouter();

  const handleDelete = useCallback(
    async (id: string) => {
      try {
        setDeletingId(id);
        const response = await axios.delete(`/api/listings/${id}`);
        if (response.status === 200) {
          toast.success("Listing Deleted");
          router.refresh();
        }
      } catch (error: any) {
        toast.error(error?.response?.data?.error);
      }
      setDeletingId("");
    },
    [router]
  );
  return (
    <Container>
      <Heading title="My Properties" subtitle="Your Registered Properties" />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {listing.map((property, index) => (
          <ListingCard
            data={property}
            currentUser={currentUser}
            key={index}
            actionId={property.id}
            onAction={handleDelete}
            disabled={deletingId === property.id}
            actionLabel="Delete the Property"
          />
        ))}
      </div>
    </Container>
  );
};

export default PropertiesClient;
