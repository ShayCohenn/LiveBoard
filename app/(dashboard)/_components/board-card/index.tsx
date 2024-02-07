"use client";

import Image from "next/image";
import Link from "next/link";
import Overlay from "./Overlay";
import { useAuth } from "@clerk/nextjs";
import { formatDistanceToNow } from "date-fns";
import Footer from "./Footer";
import Actions from "@/components/Actions";
import { MoreHorizontal } from "lucide-react";

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
  const { userId } = useAuth();

  const authorLabel = userId === props.authorId ? "You" : props.authorName;
  const createdAtLabel = formatDistanceToNow(props.createdAt, {
    addSuffix: true,
  });
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
          <Actions id={props.id} title={props.title} side="bottom">
            <button
              className="absolute top-1 right-1 opacity-0
            group-hover:opacity-100 transition-opacity px-3 py-2 outline-none"
            >
              <MoreHorizontal
                className="text-white opacity-70 hover:opacity-100 
              transition-opacity"
              />
            </button>
          </Actions>
        </div>
        <Footer
          isFavorite={props.isFavorite}
          title={props.title}
          authorLabel={authorLabel}
          createdAtLabel={createdAtLabel}
          onClick={() => {}}
          disabled={false}
        />
      </div>
    </Link>
  );
};

BoardCard.Skeleton = function BoardCardSkeleton() {
  return (
    <div className="aspect-[100/127] rounded-lg overflow-hidden">
      <div className="h-full w-full bg-muted-foreground/40 animate-pulse" />
    </div>
  );
};
