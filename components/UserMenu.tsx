'use client';

import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";


import MenuItem from "./MenuItem";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import Avatar from "./Avatar";
import { logout } from "@/actions/logout";


const UserMenu = () => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const user = useCurrentUser();

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={toggleOpen}
          className="
          p-1
          md:py-1
          md:px-2
          border-[1px] 
          border-neutral-200 
          flex 
          flex-row 
          items-center 
          gap-3 
          rounded-full 
          cursor-pointer 
          hover:shadow-md 
          transition
          "
        >
          <div className="hidden max-sm:block">
            <AiOutlineMenu />
          </div>
          <div className=" ">
            <Avatar src={user?.image} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="
            absolute 
            rounded-xl 
            shadow-md
            w-[40vw]
            md:w-3/4 
            bg-white 
            overflow-hidden 
            right-0 
            top-12 
            text-sm
          "
        >
          <div className="flex flex-col cursor-pointer">
            {user ? (
              <>
                <MenuItem
                  label="Logout"
                  onClick={logout}
                />
                <MenuItem
                  label="Settings"
                  onClick={() => router.push('/settings')}
                />
                <hr />
              </>
            ) : (
              <>
                <MenuItem
                  label="Login"
                  onClick={() => router.push('/auth/login')}
                />
                <MenuItem
                  label="Sign up"
                  onClick={() => router.push('/auth/register')}
                />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default UserMenu;