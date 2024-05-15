import { kalamFont } from "@/constants/font";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";
import { NoteLayer } from "@/types/canvas";
import { colorToCss, cn, getContrastingTextColor } from "@/lib/utils";
import { useMutation } from "@/liveblocks.config";

type props = {
  id: string;
  layer: NoteLayer;
  onPointerDown: (e: React.PointerEvent, id: string) => void;
  selectionColor?: string;
};

const calcFontSize = (width: number, height: number): number => {
  const scaleFactor = 0.2;
  const fontsizeBasedOnHeight = height * scaleFactor;
  const fontsizeBasedOnWidth = width * scaleFactor;

  return Math.min(fontsizeBasedOnHeight, fontsizeBasedOnWidth);
};

const Note = (props: props) => {
  const { x, y, width, height, fill, value } = props.layer;

  const updateValue = useMutation(({ storage }, newValue: string) => {
    const liveLayers = storage.get("layers");
    liveLayers.get(props.id)?.set("value", newValue);
  }, []);

  const handleContentChange = (e: ContentEditableEvent) => {
    updateValue(e.target.value);
  };

  return (
    <foreignObject
      x={x}
      y={y}
      width={width}
      height={height}
      onPointerDown={(e) => props.onPointerDown(e, props.id)}
      style={{
        outline: props.selectionColor
          ? `1px solid ${props.selectionColor}`
          : "none",
        backgroundColor: fill ? colorToCss(fill) : "#000",
      }}
      className="shadow-xl drop-shadow-2xl shadow-black/80"
    >
      <ContentEditable
        html={value || "text"}
        onChange={handleContentChange}
        className={cn(
          "h-full w-full flex items-center justify-center text-center outline-none",
          kalamFont.className
        )}
        style={{
          color: fill ? getContrastingTextColor(fill) : "#000",
          fontSize: calcFontSize(width, height),
        }}
      />
    </foreignObject>
  );
};

export default Note;
