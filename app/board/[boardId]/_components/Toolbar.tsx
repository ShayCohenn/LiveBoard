import ToolButton from "./ToolButton";
import { CanvasMode, CanvasState, LayerType } from "@/types/canvas";
import {
  Circle,
  MousePointer2,
  Pencil,
  Redo2,
  Square,
  StickyNote,
  Type,
  Undo2,
} from "lucide-react";

type props = {
  canvasState: CanvasState;
  setCanvasState: (newState: CanvasState) => void;
  undo: () => void;
  redo: () => void;
  canUndo: boolean;
  canRedo: boolean;
};

const Toolbar = (props: props) => {
  return (
    <div
      className="absolute top-[50%] -translate-y-[50%] left-2 flex
    flex-col gap-y-4"
    >
      <div
        className="bg-white rounded-md flex gap-y-1 flex-col items-center
      p-1.5 shadow-md"
      >
        <ToolButton
          label="Select"
          icon={MousePointer2}
          onClick={() => props.setCanvasState({ mode: CanvasMode.None })}
          isActive={
            props.canvasState.mode === CanvasMode.None ||
            props.canvasState.mode === CanvasMode.Translating ||
            props.canvasState.mode === CanvasMode.SelectionNet ||
            props.canvasState.mode === CanvasMode.Pressing ||
            props.canvasState.mode === CanvasMode.Resizing
          }
        />
        <ToolButton
          label="Text"
          icon={Type}
          onClick={() =>
            props.setCanvasState({
              mode: CanvasMode.Inserting,
              layerType: LayerType.Text,
            })
          }
          isActive={
            props.canvasState.mode === CanvasMode.Inserting &&
            props.canvasState.layerType === LayerType.Text
          }
        />
        <ToolButton
          label="Sticky note"
          icon={StickyNote}
          onClick={() =>
            props.setCanvasState({
              mode: CanvasMode.Inserting,
              layerType: LayerType.Note,
            })
          }
          isActive={
            props.canvasState.mode === CanvasMode.Inserting &&
            props.canvasState.layerType === LayerType.Note
          }
        />
        <ToolButton
          label="Rectangle"
          icon={Square}
          onClick={() =>
            props.setCanvasState({
              mode: CanvasMode.Inserting,
              layerType: LayerType.Rectangle,
            })
          }
          isActive={
            props.canvasState.mode === CanvasMode.Inserting &&
            props.canvasState.layerType === LayerType.Rectangle
          }
        />
        <ToolButton
          label="Ellipse"
          icon={Circle}
          onClick={() =>
            props.setCanvasState({
              mode: CanvasMode.Inserting,
              layerType: LayerType.Ellipse,
            })
          }
          isActive={
            props.canvasState.mode === CanvasMode.Inserting &&
            props.canvasState.layerType === LayerType.Ellipse
          }
        />
        <ToolButton
          label="Pen"
          icon={Pencil}
          onClick={() =>
            props.setCanvasState({
              mode: CanvasMode.Pencil,
            })
          }
          isActive={props.canvasState.mode === CanvasMode.Pencil}
        />
      </div>
      <div
        className="bg-white rounded-md p-1.5 flex flex-col
      items-center shadow-md"
      >
        <ToolButton
          label="Undo"
          icon={Undo2}
          onClick={props.undo}
          isDisabled={!props.canUndo}
        />
        <ToolButton
          label="Redo"
          icon={Redo2}
          onClick={props.redo}
          isDisabled={!props.canRedo}
        />
      </div>
    </div>
  );
};

export const ToolbarSkeleton = () => {
  return (
    <div
      className="absolute top-[50%] -translate-y-[50%] left-2 flex
    flex-col gap-y-4 bg-white h-[360px] w-[52px] rounded-md shadow-md"
    />
  );
};

export default Toolbar;
