import getCurrentUser from "@/actions/getCurrentUser";
import getListingsById from "@/actions/getListingsById";
import ClientOnly from "@/components/ClientOnly";
import EmptyState from "@/components/EmptyState";
import ListingClient from "@/components/Listings/ListingClient";
import React from "react";

type Props = {
  listingId: string;
};

const ListingPage = async ({ params }: { params: Props }) => {
  const listing = await getListingsById(params);
  const currentUser = await getCurrentUser();

  if (!listing) {
    return (
      <ClientOnly>
        <EmptyState />
      </ClientOnly>
    );
  }
  return (
    <div>
      <ListingClient listing={listing} currentUser={currentUser} />
    </div>
  );
};

export default ListingPage;
