import React from "react";
import Image from "next/image";
import { MemberName } from "@/types/constant.types";

interface ChatHeaderProps {
  name: MemberName;
}

const ChatHeader = ({ name }: ChatHeaderProps) => {
  return (
    <header className="navbar min-h-16 sticky top-0 left-0 max-w-[450px] bg-white z-50">
      <div className="navbar-start">
        <button className="btn btn-square btn-ghost">
          <Image width={20} height={20} src="/icons/back.png" alt="back sign" />
        </button>
      </div>
      <div className="navbar-center">{name}</div>
      <div className="navbar-end">
        <button
          className="btn btn-ghost btn-circle"
          onClick={() => console.log("search clicked")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <button
          className="btn btn-ghost btn-circle"
          onClick={() => console.log("menu clicked")}
        >
          <Image
            width={20}
            height={20}
            src={"/icons/menu-vertical.png"}
            alt="more"
          />
        </button>
      </div>
    </header>
  );
};

export default ChatHeader;
