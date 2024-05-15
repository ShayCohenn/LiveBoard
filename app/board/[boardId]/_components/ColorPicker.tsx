"use client";

import { colorToCss } from "@/lib/utils";
import { Color } from "@/types/canvas";
import { COLORS } from "@/constants/colors";

type props = {
  onChange: (color: Color) => void;
};

export const ColorPicker = (props: props) => {
  return (
    <div className="flex flex-wrap gap-2 items-center max-w-[164px] pr-2 mr-2 border-r border-neutral-200">
      {COLORS.map((color, key) => (
        <ColorButton key={key} onClick={props.onChange} color={color} />
      ))}
    </div>
  );
};

type ColorButtonProps = {
  onClick: (color: Color) => void;
  color: Color;
};

const ColorButton = (buttonProps: ColorButtonProps) => {
  return (
    <button
      className="w-8 h-8 items-center flex justify-center hover:opacity-75 transition"
      onClick={() => buttonProps.onClick(buttonProps.color)}
    >
      <div
        className="h-8 w-8 rounded-md border border-neutral-300"
        style={{ background: colorToCss(buttonProps.color) }}
      />
    </button>
  );
};
