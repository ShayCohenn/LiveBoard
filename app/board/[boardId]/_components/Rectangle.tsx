import { RectangleLayer } from "@/types/canvas";

type props = {
  id: string;
  layer: RectangleLayer;
  onPointerDown: (e: React.PointerEvent, id: string) => void;
  selectionColor?: string;
};

const Rectangle = (props: props) => {
  const { x, y, width, height, fill } = props.layer;

  return (
    <rect
      className="drop-shadow-md"
      onPointerDown={(e) => props.onPointerDown(e, props.id)}
      style={{
        transform: `translate(${x}px, ${y}px)`,
      }}
      x={0}
      y={0}
      width={width}
      height={height}
      strokeWidth={1}
      fill="#000"
      stroke="transparent"
    />
  );
};

export default Rectangle;
