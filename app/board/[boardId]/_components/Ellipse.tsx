import { colorToCss } from "@/lib/utils";
import { EllipseLayer } from "@/types/canvas";

type props = {
  id: string;
  layer: EllipseLayer;
  onPointerDown: (e: React.PointerEvent, id: string) => void;
  selectionColor?: string;
};

const Ellipse = (props: props) => {
  return (
    <ellipse
      className="drop-shadow-md"
      onPointerDown={(e) => props.onPointerDown(e, props.id)}
      style={{
        transform: `translate(${props.layer.x}px, ${props.layer.y}px)`,
      }}
      cx={props.layer.width / 2}
      cy={props.layer.height / 2}
      rx={props.layer.width / 2}
      ry={props.layer.height / 2}
      fill={props.layer.fill ? colorToCss(props.layer.fill) : "#000"}
      stroke={props.selectionColor || "transparent"}
      strokeWidth={1}
    >
      Ellipse
    </ellipse>
  );
};

export default Ellipse;
