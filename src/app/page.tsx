"use client";
import { getData } from "@/api/api";
import ListHeader from "@/components/header/ListHeader";
import Member from "@/components/profile/Member";
import { MemberName, MemberProps } from "@/types/constant.types";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then((res) => setData(res));
  }, []);

  const members: MemberProps[] = [
    { name: "성한빈", status: "안녕 :)" },
    { name: "김지웅", status: "" },
    { name: "장하오", status: "Hello" },
    { name: "석매튜", status: "Hi, there" },
    { name: "김태래", status: "락스타" },
    { name: "리키", status: "" },
    { name: "김규빈", status: "" },
    { name: "박건욱", status: "" },
    { name: "한유진", status: "뽀돌" },
  ];

  return (
    <main className="min-h-screen flex-col items-center justify-between relative">
      <ListHeader type="profile" />
      <article className="pt-16">
        {members.map(({ name, status }, i) => (
          <Member key={i} name={name} status={status} />
        ))}
      </article>
    </main>
  );
}
