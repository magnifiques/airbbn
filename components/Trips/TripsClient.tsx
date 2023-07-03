"use client";

import { SafeReservation, SafeUser } from "@/types";
import React, { useCallback, useState } from "react";
import Container from "../Container";
import Heading from "../Heading";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import ListingCard from "../Listings/ListingCard";

type Props = {
  reservation: SafeReservation[];
  currentUser?: SafeUser | null;
};

const TripsClient = ({ currentUser, reservation }: Props) => {
  const [deletingId, setDeletingId] = useState("");
  const router = useRouter();

  const handleCancel = useCallback(async (id: string) => {
    try {
      setDeletingId(id);
      const response = await axios.delete(`/api/reservation/${id}`);
      if (response.status === 200) {
        toast.success("Reservation Cancelled");
        router.refresh();
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.error);
    }
    setDeletingId("");
  }, []);
  return (
    <Container>
      <Heading
        title="Trips"
        subtitle="Where you've been and where you're going"
      />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {reservation.map((reservation, index) => (
          <ListingCard
            key={index}
            data={reservation.listing}
            reservation={reservation}
            actionId={reservation.id}
            onAction={handleCancel}
            disabled={deletingId === reservation.id}
            actionLabel="Cancel Reservation"
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
};

export default TripsClient;
