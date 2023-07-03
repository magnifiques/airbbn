import getCurrentUser from "@/actions/getCurrentUser";
import getFavorites from "@/actions/getFavorites";
import ClientOnly from "@/components/ClientOnly";
import EmptyState from "@/components/EmptyState";
import FavoritesClient from "@/components/Favorites/FavoritesClient";
import React from "react";

type Props = {};

const FavoritesPage = async (props: Props) => {
  const favorites = await getFavorites();
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState
          title="Unauthorized"
          subTitle="Please login to your account in order to see your favorites"
        />
      </ClientOnly>
    );
  }

  if (favorites.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No Favorites found"
          subTitle="Looks like you haven't favorited any property"
        />
      </ClientOnly>
    );
  }
  return (
    <ClientOnly>
      <FavoritesClient favorites={favorites} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default FavoritesPage;
