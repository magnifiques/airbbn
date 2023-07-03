import getCurrentUser from "@/actions/getCurrentUser";
import getReservation from "@/actions/getReservation";
import ClientOnly from "@/components/ClientOnly";
import EmptyState from "@/components/EmptyState";
import ReservationsClient from "@/components/Reservations/ReservationsClient";
import React from "react";

type Props = {};

const ReservationPage = async (props: Props) => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState
          title="Unauthorized"
          subTitle="Please login to your account in order to check your reservations"
        />
      </ClientOnly>
    );
  }

  const reservation = await getReservation({ authorId: currentUser.id });

  if (reservation.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No Reservations found"
          subTitle="Looks like you have no reservations on your property"
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <ReservationsClient
        reservations={reservation}
        currentUser={currentUser}
      />
    </ClientOnly>
  );
};

export default ReservationPage;
