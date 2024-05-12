"use client";

import { useSelectionBounds } from "@/hooks/use-selection-bounds";
import { useSelf, useStorage } from "@/liveblocks.config";
import { LayerType, Side, XYWH } from "@/types/canvas";
import { memo } from "react";

type props = {
  onResizeHandlePointerDown: (corner: Side, initialBounds: XYWH) => void;
};

const HANDLE_WIDTH = 8;

const SelectionBox = memo((props: props) => {
  const soleLayerId = useSelf((me) =>
    me.presence.selection.length === 1 ? me.presence.selection[0] : null
  );

  const isShowingHandles = useStorage(
    (root) =>
      soleLayerId && root.layers.get(soleLayerId)?.type !== LayerType.Path
  );

  const bounds = useSelectionBounds();

  if (!bounds) return null;

  return (
    <>
      <rect
        className="fill-transparent stroke-blue-500 pointer-events-none"
        style={{ transform: `translate(${bounds.x}px, ${bounds.y}px)` }}
        x={0}
        y={0}
        width={bounds.width}
        height={bounds.height}
        strokeWidth={2}
      />
      {isShowingHandles && (
        <>
        {/* TOP LEFT */}
          <rect
            className="fill-white stroke-1 stroke-blue-500"
            x={0}
            y={0}
            style={{
              cursor: "nwse-resize",
              width: `${HANDLE_WIDTH}px`,
              height: `${HANDLE_WIDTH}px`,
              transform: `translate(${bounds.x - HANDLE_WIDTH / 2}px, ${
                bounds.y - HANDLE_WIDTH / 2
              }px)`,
            }}
            onPointerDown={(e) => {
              e.stopPropagation();
              props.onResizeHandlePointerDown(Side.Top + Side.Left, bounds)
            }}
          />

          {/* TOP */}
          <rect
            className="fill-white stroke-1 stroke-blue-500"
            x={0}
            y={0}
            style={{
              cursor: "ns-resize",
              width: `${HANDLE_WIDTH}px`,
              height: `${HANDLE_WIDTH}px`,
              transform: `translate(${
                bounds.x + bounds.width / 2 - HANDLE_WIDTH / 2
              }px, ${bounds.y - HANDLE_WIDTH / 2}px)`,
            }}
            onPointerDown={(e) => {
              e.stopPropagation();
              props.onResizeHandlePointerDown(Side.Top, bounds)
            }}
          />

          {/* TOP RIGHT */}
          <rect
            className="fill-white stroke-1 stroke-blue-500"
            x={0}
            y={0}
            style={{
              cursor: "nesw-resize",
              width: `${HANDLE_WIDTH}px`,
              height: `${HANDLE_WIDTH}px`,
              transform: `translate(${
                bounds.x - HANDLE_WIDTH / 2 + bounds.width
              }px, ${bounds.y - HANDLE_WIDTH / 2}px)`,
            }}
            onPointerDown={(e) => {
              e.stopPropagation();
              props.onResizeHandlePointerDown(Side.Top + Side.Right, bounds)
            }}
          />

          {/* RIGHT */}
          <rect
            className="fill-white stroke-1 stroke-blue-500"
            x={0}
            y={0}
            style={{
              cursor: "ew-resize",
              width: `${HANDLE_WIDTH}px`,
              height: `${HANDLE_WIDTH}px`,
              transform: `translate(${
                bounds.x - HANDLE_WIDTH / 2 + bounds.width
              }px, ${bounds.y + bounds.height / 2 - HANDLE_WIDTH / 2}px)`,
            }}
            onPointerDown={(e) => {
              e.stopPropagation();
              props.onResizeHandlePointerDown(Side.Right, bounds)
            }}
          />

          {/* BOTTOM RIGHT */}
          <rect
            className="fill-white stroke-1 stroke-blue-500"
            x={0}
            y={0}
            style={{
              cursor: "nwse-resize",
              width: `${HANDLE_WIDTH}px`,
              height: `${HANDLE_WIDTH}px`,
              transform: `translate(${
                bounds.x - HANDLE_WIDTH / 2 + bounds.width
              }px, ${bounds.y - HANDLE_WIDTH / 2 + bounds.height}px)`,
            }}
            onPointerDown={(e) => {
              e.stopPropagation();
              props.onResizeHandlePointerDown(Side.Bottom + Side.Right, bounds)
            }}
          />

          {/* BOTTOM */}
          <rect
            className="fill-white stroke-1 stroke-blue-500"
            x={0}
            y={0}
            style={{
              cursor: "ns-resize",
              width: `${HANDLE_WIDTH}px`,
              height: `${HANDLE_WIDTH}px`,
              transform: `translate(${
                bounds.x + bounds.width / 2 - HANDLE_WIDTH / 2
              }px, ${bounds.y - HANDLE_WIDTH / 2 + bounds.height}px)`,
            }}
            onPointerDown={(e) => {
              e.stopPropagation();
              props.onResizeHandlePointerDown(Side.Bottom, bounds)
            }}
          />

          {/* BOTTOM LEFT */}
          <rect
            className="fill-white stroke-1 stroke-blue-500"
            x={0}
            y={0}
            style={{
              cursor: "nesw-resize",
              width: `${HANDLE_WIDTH}px`,
              height: `${HANDLE_WIDTH}px`,
              transform: `translate(${bounds.x - HANDLE_WIDTH / 2}px, ${
                bounds.y - HANDLE_WIDTH / 2 + bounds.height
              }px)`,
            }}
            onPointerDown={(e) => {
              e.stopPropagation();
              props.onResizeHandlePointerDown(Side.Bottom + Side.Left, bounds)
            }}
          />

          {/* LEFT */}
          <rect
            className="fill-white stroke-1 stroke-blue-500"
            x={0}
            y={0}
            style={{
              cursor: "ew-resize",
              width: `${HANDLE_WIDTH}px`,
              height: `${HANDLE_WIDTH}px`,
              transform: `translate(${bounds.x - HANDLE_WIDTH / 2}px, ${
                bounds.y - HANDLE_WIDTH / 2 + bounds.height / 2
              }px)`,
            }}
            onPointerDown={(e) => {
              e.stopPropagation();
              props.onResizeHandlePointerDown(Side.Left, bounds)
            }}
          />
        </>
      )}
    </>
  );
});

export default SelectionBox;