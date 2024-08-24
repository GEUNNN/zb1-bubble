import { MemberName } from "@/types/constant.types";
import Image from "next/image";
import shbProfile from "../../../public/profile/shbProfile.jpeg";

export interface MemberProps {
  name: MemberName;
  status: string;
}

const Member = ({ name, status }: MemberProps) => {
  return (
    <div className="p-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <Image src={shbProfile} alt="profile image" />
        </div>
        <span>{name}</span>
      </div>
      <p className="text-xs">{status}</p>
    </div>
  );
};

export default Member;
