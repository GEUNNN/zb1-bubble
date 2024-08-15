import React from "react";

interface ListHeaderProps {
  type: "profile" | "chat";
}

const ListHeader = ({ type }: ListHeaderProps) => {
  return (
    <header className="navbar fixed max-w-[450px] bg-white z-40">
      <h1 className="navbar-start text-xl pl-5">
        {type === "profile" ? "FRIENDS" : "CHATS"}
      </h1>
    </header>
  );
};

export default ListHeader;
