import { getSvgPathFromStroke } from "@/lib/utils";
import getStroke from "perfect-freehand";

type props = {
  x: number;
  y: number;
  fill: string;
  onPointerDown?: (e: React.PointerEvent) => void;
  stroke?: string;
  points: number[][];
};

const Path = (props: props) => {
  return (
    <path
      className="drop-shadow-md"
      onPointerDown={props.onPointerDown}
      d={getSvgPathFromStroke(
        getStroke(props.points, {
          size: 16,
          thinning: 0.5,
          smoothing: 0.5,
          streamline: 0.5,
        })
      )}
      style={{
        transform: `translate(${props.x}px, ${props.y}px)`,
      }}
      x={0}
      y={0}
      fill={props.fill}
      stroke={props.stroke}
      strokeWidth={1}
    >
      Path
    </path>
  );
};

export default Path;
