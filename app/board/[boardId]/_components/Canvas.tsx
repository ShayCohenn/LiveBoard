"use client";

import Info from "./Info";
import Participants from "./Participants";
import Toolbar from "./Toolbar";
import { useSelf } from "@/liveblocks.config";

type props = {
  boardId: string;
};

const Canvas = (props: props) => {
  const info = useSelf((me) => me.info)
  console.log(info);
  
  return (
    <main className="h-full w-full relative bg-neutral-100 touch-none">
      <Info />
      <Participants />
      <Toolbar />
    </main>
  );
};

export default Canvas;
