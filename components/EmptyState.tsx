"use client";
import React from "react";
import Heading from "./Heading";
import Button from "./Button";
import { useRouter } from "next/navigation";

type Props = {
  title?: string;
  subTitle?: string;
  showReset?: boolean;
};

const EmptyState = ({
  title = "No exact Matches",
  subTitle = "Try Changing or Removing some of your filters",
  showReset,
}: Props) => {
  const router = useRouter();
  return (
    <div className="pt-24 flex flex-col gap-2 justify-center items-center">
      <Heading center title={title} subtitle={subTitle} />
      {showReset && (
        <div className="w-48">
          <Button
            outline
            label="Remove all filters"
            onClick={() => router.push("/")}
          />
        </div>
      )}
    </div>
  );
};

export default EmptyState;
