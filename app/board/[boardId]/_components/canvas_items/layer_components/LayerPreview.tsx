"use client";

import { useStorage } from "@/liveblocks.config";
import { LayerType } from "@/types/canvas";
import { memo } from "react";
import Rectangle from "../layers/Rectangle";
import Ellipse from "../layers/Ellipse";
import Text from "../layers/Text";
import Note from "../layers/Note";
import Path from "../layers/Path";
import { colorToCss } from "@/lib/utils";

type props = {
  id: string;
  onLayerPointerDown: (e: React.PointerEvent, layerId: string) => void;
  selectionColor?: string;
};

const LayerPreview = memo((props: props) => {
  const layer = useStorage((root) => root.layers.get(props.id));

  if (!layer) return null;

  switch (layer.type) {
    case LayerType.Path:
      return (
        <Path
          key={props.id}
          x={layer.x}
          y={layer.y}
          fill={layer.fill ? colorToCss(layer.fill) : "#000"}
          points={layer.points}
          onPointerDown={(e) => props.onLayerPointerDown(e, props.id)}
          stroke={props.selectionColor}
        />
      );
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
