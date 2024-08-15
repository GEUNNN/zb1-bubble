import { MemberName } from "@/types/constant.types";
import Image from "next/image";
import React, { memo } from "react";

export interface MemberProps {
  name: MemberName;
  status: string;
}

const Member = ({ name, status }: MemberProps) => {
  return (
    <div className="p-3 flex justify-between">
      <div className="flex gap-2 content-center">
        <Image src="" alt="profile image" width={10} height={10} />
        <span>{name}</span>
      </div>
      <p>{status}</p>
    </div>
  );
};

export default Member;
