"use client";
import EmptyState from "@/components/EmptyState";
import React, { useEffect } from "react";

type Props = {
  error: Error;
};

const Error = ({ error }: Props) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <EmptyState title="Woah!" subTitle="Looks Like Something went wrong!" />
  );
};

export default Error;
