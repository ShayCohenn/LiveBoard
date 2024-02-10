"use client";

import Info from "./Info";
import Participants from "./Participants";
import Toolbar from "./Toolbar";
import { useSelf } from "@/liveblocks.config";

type props = {
  boardId: string;
};

const Canvas = (props: props) => {
  return (
    <main className="h-full w-full relative bg-neutral-100 touch-none">
      <Info boardId={props.boardId} />
      <Participants />
      <Toolbar />
    </main>
  );
};

export default Canvas;
