"use client";
import React, { useCallback, useState } from "react";
import Container from "../Container";
import Heading from "../Heading";
import { SafeReservation, SafeUser } from "@/types";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import ListingCard from "../Listings/ListingCard";

type Props = {
  reservations: SafeReservation[];
  currentUser?: SafeUser | null;
};

const ReservationsClient = ({ currentUser, reservations }: Props) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState("");

  const handleDelete = useCallback(
    async (id: string) => {
      try {
        setDeletingId(id);
        const response = await axios.delete(`/api/reservation/${id}`);

        if (response.status === 200) {
          toast.success("Reservation has been cancelled");
          router.refresh();
        }
      } catch (error) {
        toast.error("Something went Wrong");
      }
      setDeletingId("");
    },
    [router]
  );
  return (
    <Container>
      <Heading
        title="Reservations"
        subtitle="Reservations on your properties"
      />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {reservations.map((reservation, index) => (
          <ListingCard
            key={index}
            data={reservation.listing}
            reservation={reservation}
            onAction={handleDelete}
            disabled={deletingId === reservation.id}
            actionLabel="Cancel guest's reservation"
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
};

export default ReservationsClient;
