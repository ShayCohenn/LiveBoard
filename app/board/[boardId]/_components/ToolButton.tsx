"use client";

import Hint from "@/components/Hint";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

type props = {
  label: string;
  icon: LucideIcon;
  onClick: () => void;
  isActive?: boolean;
  isDisabled?: boolean;
};
const ToolButton = (props: props) => {
  const Icon = props.icon;
  return (
    <Hint label={props.label} side="right" sideOffset={14}>
      <Button
        disabled={props.isDisabled}
        onClick={props.onClick}
        size="icon"
        variant={props.isActive ? "boardActive" : "board"}
      >
        <Icon />
      </Button>
    </Hint>
  );
};

export default ToolButton;
