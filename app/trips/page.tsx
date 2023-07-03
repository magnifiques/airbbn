import getCurrentUser from "@/actions/getCurrentUser";
import getReservation from "@/actions/getReservation";
import ClientOnly from "@/components/ClientOnly";
import EmptyState from "@/components/EmptyState";
import TripsClient from "@/components/Trips/TripsClient";
import React from "react";

type Props = {};

const TripsPage = async (props: Props) => {
  const currentUser = await getCurrentUser();

  if (!currentUser)
    return (
      <ClientOnly>
        <EmptyState
          title="Unauthorized"
          subTitle="Please login in order to check your trips"
        />
      </ClientOnly>
    );

  const reservation = await getReservation({ userId: currentUser.id });

  if (reservation.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No Trips found"
          subTitle="Looks like you haven't reserved any trips"
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <TripsClient reservation={reservation} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default TripsPage;
