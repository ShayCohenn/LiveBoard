"use client";

import { useState } from "react";
import Info from "./Info";
import Participants from "./Participants";
import Toolbar from "./Toolbar";
import { CanvasMode, CanvasState } from "@/types/canvas";
import { useHistory, useCanRedo, useCanUndo } from "@/liveblocks.config";

type props = {
  boardId: string;
};

const Canvas = (props: props) => {
  const [canvasState, setCanvasState] = useState<CanvasState>({
    mode: CanvasMode.None,
  });

  const history = useHistory()
  const canRedo = useCanRedo()
  const canUndo = useCanUndo()
  return (
    <main className="h-full w-full relative bg-neutral-100 touch-none">
      <Info boardId={props.boardId} />
      <Participants />
      <Toolbar
        canvasState={canvasState}
        setCanvasState={setCanvasState}
        canRedo={canRedo}
        canUndo={canUndo}
        undo={history.undo}
        redo={history.redo}
      />
    </main>
  );
};

export default Canvas;
