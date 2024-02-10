"use client";

import Actions from "@/components/Actions";
import Hint from "@/components/Hint";
import { Button } from "@/components/ui/button";
import { font } from "@/constants/font";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { cn } from "@/lib/utils";
import { useRenameModal } from "@/store/use-rename-modal";
import { useQuery } from "convex/react";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type props = {
  boardId: string;
};

const TabSeperator = () => {
  return <div className="text-neutral-300 px-1.5">|</div>;
};

const Info = (props: props) => {
  const data = useQuery(api.board.get, {
    id: props.boardId as Id<"boards">,
  });
  const { onOpen } = useRenameModal();

  if (!data) return <InfoSkeleton />;
  return (
    <div
      className="absolute top-2 bg-white rounded-md px-1.5 
  h-12 flex items-center shadow-md"
    >
      <Hint label="Go to boards" side="bottom" sideOffset={10}>
        <Button className="px-2" asChild variant={"board"}>
          <Link href={"/"}>
            <Image src={"/logo.svg"} alt="Board Logo" height={40} width={40} />
            <span
              className={cn(
                "font-semibold text-xl ml-2 text-black",
                font.className
              )}
            >
              LiveBoard
            </span>
          </Link>
        </Button>
      </Hint>
      <TabSeperator />
      <Hint label="Edit title" side="bottom" sideOffset={10}>
        <Button
          variant={"board"}
          className="text-base font-normam px-3"
          onClick={() => onOpen(data._id, data.title)}
        >
          {data.title}
        </Button>
      </Hint>
      <TabSeperator />
      <Actions id={data._id} sideOffset={10} title={data.title} side="bottom">
        <div>
          <Hint label="Main Menu" side="bottom" sideOffset={10}>
            <Button variant={"board"} size={"icon"}>
              <Menu />
            </Button>
          </Hint>
        </div>
      </Actions>
    </div>
  );
};

export const InfoSkeleton = () => {
  return (
    <div
      className="absolute top-2 left-2 bg-white rounded-md
    h-12 flex items-center shadow-md w-[300px]"
    />
  );
};

export default Info;
