"use client";
import useCountries from "@/hooks/useCountrySelect";
import { SafeListings, SafeUser } from "@/types";
import { Listing, Reservation } from "@prisma/client";
import { useRouter } from "next/navigation";
import React, { useCallback, useMemo } from "react";
import { format } from "date-fns";
import Image from "next/image";
import HeartButton from "../HeartButton";
import Button from "../Button";

type Props = {
  data: SafeListings;
  reservation?: Reservation;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  currentUser?: SafeUser | null;
};

const ListingCard = ({
  data,
  reservation,
  onAction,
  disabled,
  actionId = "",
  actionLabel,
  currentUser,
}: Props) => {
  const router = useRouter();
  const { getByValue } = useCountries();

  const location = getByValue(data.locationValue);

  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      if (disabled) return;

      onAction?.(actionId);
    },
    [onAction, actionId]
  );

  const price = useMemo(() => {
    if (reservation) return reservation.totalPrice;

    return data.price;
  }, [data, reservation]);

  const reservationDate = useMemo(() => {
    if (!reservation) return;
    const startDate = reservation.startDate;
    const endDate = reservation.endDate;

    return `${format(startDate, "PP")} - ${format(endDate, "PP")}`;
  }, [reservation]);

  return (
    <div
      className="col-span-1 cursor-pointer group"
      onClick={() => router.push(`/listings/${data.id}`)}
    >
      <div className="flex flex-col gap-2 w-full">
        <div className="aspect-square w-full relative overflow-hidden rounded-xl">
          <Image
            fill
            src={data.imgSrc}
            alt="listing"
            className="object-cover h-full w-full group-hover:scale-110 transition"
          />
          <div className="absolute top-1 right-2">
            <HeartButton listingId={data.id} currentUser={currentUser} />
          </div>
        </div>
        <div className="font-semibold text-lg">
          {location?.region}, {location?.label}
        </div>
        <div className="font-light text-neutral-500">
          {reservationDate || data.category}
        </div>

        <div className="flex flex-row items-center gap-1">
          <div className="font-semibold">$ {price}</div>
          {!reservation && <div className="font-light">night</div>}
        </div>
        {onAction && actionLabel && (
          <Button
            small
            disabled={disabled}
            label={actionLabel}
            onClick={handleCancel}
          />
        )}
      </div>
    </div>
  );
};

export default ListingCard;
