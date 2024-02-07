"use client";

import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Link2 } from "lucide-react";
import { toast } from "sonner";

type props = {
  children: React.ReactNode;
  side?: DropdownMenuContentProps["side"];
  sideOffset?: DropdownMenuContentProps["sideOffset"];
  id: string;
  title: string;
};

const Actions = (props: props) => {
  const onCopyLink = () => {
    navigator.clipboard
      .writeText(`${window.location.origin}/board/${props.id}`)
      .then(() => toast.success("Link copied"))
      .catch(() => toast.error("Failed to copy link"));
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{props.children}</DropdownMenuTrigger>
      <DropdownMenuContent
        side={props.side}
        onClick={(e) => e.stopPropagation()}
        sideOffset={props.sideOffset}
        className="w-60"
      >
        <DropdownMenuItem
          onClick={onCopyLink}
          className="p-3 cursor-pointer hover:bg-muted-foreground/20"
        >
          <Link2 className="h-4 w-4 mr-2" />
          Copy Board Link
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Actions;
