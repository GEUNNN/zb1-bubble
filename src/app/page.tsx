"use client";
import { getData } from "@/api/api";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then((res) => setData(res));
  }, []);

  return (
    <main className="min-h-screen flex-col items-center justify-between p-24">
      <div className="flex-row z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        {data.map((item, i) =>
          item.type === "text" ? (
            <div key={i} className="whitespace-pre-wrap ">
              {item.content}
            </div>
          ) : (
            <Image
              key={i}
              loader={() => item.content}
              src={item.content}
              width={200}
              height={200}
              alt="버블 이미지"
            />
          )
        )}
      </div>
    </main>
  );
}
