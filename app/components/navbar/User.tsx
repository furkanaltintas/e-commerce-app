"use client";
import { User } from "@prisma/client";
import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

interface UserProps {
  currentUser: User | null | undefined;
}
const User: React.FC<UserProps> = ({ currentUser }) => {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);

  const menuFunc = (type: any) => {
    setOpenMenu(false);
    if (type == "logout") {
      toast.success('Çıkış İşlemi Başarılı...');
      signOut({ redirect: false }).then(() => {
        router.push("/login");
      });
    } else if (type == "register") {
      router.push("/register");
    } else {
      router.push("/login");
    }
  };

  const defaultStyle =
    "text-slate-600 hover:text-orange-600 transition cursor-pointer m-2";
  return (
    <div className="hidden md:flex relative">
      <div
        onClick={() => setOpenMenu(!openMenu)}
        className="flex items-center gap-1 cursor-pointer"
      >
        <AiOutlineUser size="25" />
        <div>{currentUser ? currentUser.name : "User"}</div>
      </div>
      {openMenu && (
        <div className="absolute w-[150px] top-10 bg-white shadow-lg right-0 p-2 rounded-md">
          {currentUser ? (
            <div className="space-y-1">
              <div
                onClick={() => router.push("/admin")}
                className={defaultStyle}
              >
                Admin
              </div>
              <div onClick={() => menuFunc("logout")} className={defaultStyle}>
                Logout
              </div>
            </div>
          ) : (
            <div>
              <div onClick={() => menuFunc("login")} className={defaultStyle}>
                Login
              </div>
              <div
                onClick={() => menuFunc("register")}
                className={defaultStyle}
              >
                Register
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default User;
