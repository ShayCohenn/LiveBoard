"use client";

import Image from "next/image";
import Link from "next/link";
import Overlay from "./Overlay";

type props = {
  id: string;
  title: string;
  imageUrl: string;
  authorId: string;
  authorName: string;
  createdAt: number;
  orgId: string;
  isFavorite: boolean;
};

export const BoardCard = (props: props) => {
  return (
    <Link href={`/board/${props.id}`}>
      <div
        className="group aspect-[100/127] border rounded-lg flex flex-col
      justify-between overflow-hidden"
      >
        <div className="relative flex-1 bg-amber-50">
          <Image
            src={props.imageUrl}
            alt={`${props.title} by ${props.authorName}`}
            fill
            className="object-fill"
          />
          <Overlay />
        </div>
      </div>
    </Link>
  );
};
