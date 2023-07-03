import getCurrentUser from "@/actions/getCurrentUser";
import getListing from "@/actions/getListings";
import ClientOnly from "@/components/ClientOnly";
import EmptyState from "@/components/EmptyState";
import PropertiesClient from "@/components/Properties/PropertiesClient";
import React from "react";

type Props = {};

const PropertiesPage = async (props: Props) => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState
          title="Unauthorized"
          subTitle="Please login to your account in order to checkout your properties"
        />
      </ClientOnly>
    );
  }

  const listing = await getListing({
    userId: currentUser.id,
  });

  if (listing.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No Properties found"
          subTitle="Looks like you haven't registered your properties"
        />
      </ClientOnly>
    );
  }
  return (
    <ClientOnly>
      <PropertiesClient listing={listing} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default PropertiesPage;
