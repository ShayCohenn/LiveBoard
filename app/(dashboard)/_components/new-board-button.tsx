"use client";

import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { toast } from "sonner";

type props = {
  orgId: string;
  disabled?: boolean;
  loading?: boolean;
};

export const NewBoardButton = (props: props) => {
  const { mutate, pending } = useApiMutation(api.board.create);

  const onClick = () => {
    mutate({
      orgId: props.orgId,
      title: "Untitled",
    })
      .then((id) => {
        toast.success("Board created successfully");
        //TODO: redirect to /board/{id}
      })
      .catch(() => toast.error("Failed to create board"));
  };
  return (
    <button
      disabled={pending || props.disabled}
      onClick={onClick}
      className={cn(
        `group col-span-1 aspect-[100/127] bg-blue-950 rounded-lg
      hover:bg-indigo-950 flex flex-col items-center justify-center py-6`,
        props.disabled && "cursor-not-allowed opacity-75 hover:bg-indigo-950",
        (pending || props.loading) && "cursor-wait opacity-75 hover:bg-indigo-950",
      )}
    >
      <div />
      <Plus
        className={cn(
          "h-12 w-12 text-white stroke-1",
          pending ? "animate-spin" : "group-hover:animate-pulse"
        )}
      />
      <p className="text-white font-light group-hover:animate-pulse">
        New Board
      </p>
    </button>
  );
};
