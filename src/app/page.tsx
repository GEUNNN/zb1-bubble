"use client";
import { getData } from "@/api/api";
import ListHeader from "@/components/header/ListHeader";
import Member from "@/components/profile/Member";
import { MemberName } from "@/types/constant.types";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then((res) => setData(res));
  }, []);

  const members: MemberName[] = [
    "성한빈",
    "김지웅",
    "장하오",
    "석매튜",
    "김태래",
    "리키",
    "김규빈",
    "박건욱",
    "한유진",
  ];

  return (
    <main className="min-h-screen flex-col items-center justify-between relative">
      <ListHeader type="profile" />
      <article className="pt-16">
        {members.map((member, i) => (
          <Member key={i} name={member} />
        ))}
      </article>
    </main>
  );
}
