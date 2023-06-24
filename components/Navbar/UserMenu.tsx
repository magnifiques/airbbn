"use client";

import React, { useState } from "react";

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import MenuItems from "./MenuItems";
import useRegisterModal from "@/hooks/useRegisterModal";
import useLoginModal from "@/hooks/useLoginModal";
import { User } from "@prisma/client";
import { signOut } from "next-auth/react";
import { SafeUser } from "@/types";

type Props = {
  currentUser: SafeUser | null;
};

const UserMenu = ({ currentUser }: Props) => {
  const [isToggle, setIsToggle] = useState(false);
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer">
          Airbbn Your Home
        </div>
        <div
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
          onClick={() => setIsToggle((prev) => (prev = !prev))}
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar imgSrc={currentUser?.image} />
          </div>
        </div>
      </div>
      {isToggle && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItems onClick={() => console.log("W")} label="My Trips" />
                <MenuItems
                  onClick={() => console.log("W")}
                  label="My Favorites"
                />
                <MenuItems
                  onClick={() => console.log("W")}
                  label="My Reservations"
                />
                <MenuItems
                  onClick={() => console.log("W")}
                  label="My Properties"
                />
                <MenuItems
                  onClick={() => console.log("W")}
                  label="Airbbn Your Home"
                />

                <hr />
                <MenuItems onClick={() => signOut()} label="Log Out" />
              </>
            ) : (
              <>
                <MenuItems onClick={() => loginModal.onOpen()} label="Login" />

                <MenuItems
                  onClick={() => registerModal.onOpen()}
                  label="Sign Up"
                />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
