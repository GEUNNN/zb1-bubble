import React from "react";

interface ListHeaderProps {
  type: "profile" | "chat";
}

const ListHeader = ({ type }: ListHeaderProps) => {
  return (
    <header className="navbar fixed max-w-[450px] bg-white">
      <h1 className="navbar-start text-xl px-3">
        {type === "profile" ? "FRIENDS" : "CHATS"}
      </h1>
    </header>
  );
};

export default ListHeader;
