"use client";

import { memo } from "react";
import { connectionIdToColor } from "@/lib/utils";
import { MousePointer2 } from "lucide-react";
import { useOther } from "@/liveblocks.config";

type props = {
  connectionId: number;
};

const Cursor = memo((props: props) => {
  const info = useOther(props.connectionId, (user) => user?.info);
  const cursor = useOther(props.connectionId, (user) => user.presence.cursor);

  const name = info?.name || "Guest";

  if (!cursor) {
    return null;
  }
  const { x, y } = cursor;
  return (
    <foreignObject
      style={{
        transform: `translateX(${x}px) translateY(${y}px)`,
      }}
      height={50}
      width={name.length * 10 + 24}
      className="relative drop-shadow-md"
    >
      <MousePointer2
        className="h-5 w-5"
        style={{
          fill: connectionIdToColor(props.connectionId),
          color: connectionIdToColor(props.connectionId),
        }}
      />
      <div
        className="absolute left-5 px-1.5 py-0.5 rounded-md text-xs text-white
      font-semibold"
        style={{ backgroundColor: connectionIdToColor(props.connectionId) }}
      >
        {name}
      </div>
    </foreignObject>
  );
});

export default Cursor;

Cursor.displayName = "Cursor";
