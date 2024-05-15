"use client";

import { useStorage } from "@/liveblocks.config";
import { LayerType } from "@/types/canvas";
import { memo } from "react";
import Rectangle from "./Rectangle";
import Ellipse from "./Ellipse";
import Text from "./Text";
import Note from "./Note";

type props = {
  id: string;
  onLayerPointerDown: (e: React.PointerEvent, layerId: string) => void;
  selectionColor?: string;
};

const LayerPreview = memo((props: props) => {
  const layer = useStorage((root) => root.layers.get(props.id));

  if (!layer) return null;

  switch (layer.type) {
    case LayerType.Note:
      return (
        <Note
          id={props.id}
          layer={layer}
          onPointerDown={props.onLayerPointerDown}
          selectionColor={props.selectionColor}
        />
      );
    case LayerType.Text:
      return (
        <Text
          id={props.id}
          layer={layer}
          onPointerDown={props.onLayerPointerDown}
          selectionColor={props.selectionColor}
        />
      );
    case LayerType.Rectangle:
      return (
        <Rectangle
          id={props.id}
          layer={layer}
          onPointerDown={props.onLayerPointerDown}
          selectionColor={props.selectionColor}
        />
      );
    case LayerType.Ellipse:
      return (
        <Ellipse
          id={props.id}
          layer={layer}
          onPointerDown={props.onLayerPointerDown}
          selectionColor={props.selectionColor}
        />
      );
    default:
      console.warn("Unknown layer type");
      return null;
  }
});

LayerPreview.displayName = "LayerPreview";

export default LayerPreview;
