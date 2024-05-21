"use client";
import { getData } from "@/api/api";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import dayjs from "dayjs";
import ChatHeader from "@/components/ChatHeader";

const Page: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then((res) => setData(res));
  }, []);
  return (
    <main className="">
      <ChatHeader />
      {data.map((item, i) => (
        <div key={i} className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <Image
                alt="bubble profile image"
                width={10}
                height={10}
                unoptimized
                onClick={() => console.log("clicked!")}
                src="https://pbs.twimg.com/media/GL-k1ivakAA1-L-?format=jpg"
              />
            </div>
          </div>
          <div className="chat-header">
            성한빈
            <time className="ml-[5px] text-sm">{item.createdAt}</time>
          </div>
          <div className="chat-bubble bg-primary border border-primary p-2 whitespace-pre-wrap">
            {item.type === "text" ? (
              item.content
            ) : (
              <Image
                key={i}
                loader={() => item.content}
                src={item.content}
                width={200}
                height={200}
                alt="버블 이미지"
              />
            )}
          </div>
        </div>
      ))}
    </main>
  );
};

export default Page;
