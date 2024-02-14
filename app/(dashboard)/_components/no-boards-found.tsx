"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { api } from "@/convex/_generated/api";
import { useOrganization } from "@clerk/nextjs";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { toast } from "sonner";

type props = {
  image: string;
  header: string;
  p: string;
  size?: number;
  allBoards?: boolean;
};

const NoBoardFound = (props: props) => {
  const { organization } = useOrganization();
  const { mutate, pending } = useApiMutation(api.board.create);

  const onClick = () => {
    if (!organization) return;

    mutate({
      orgId: organization.id,
      title: "Untitled",
    })
      .then(() => {
        toast.success("Board created successfully");
      })
      .catch(() => toast.error("Failed to create board"));
  };
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image
        src={props.image}
        alt="No results"
        width={props.size ? props.size : 140}
        height={props.size ? props.size : 140}
      />
      <h2 className="text-2xl font-semibold mt-6">{props.header}</h2>
      <p className="text-muted-foreground text-sm mt-2">{props.p}</p>
      {props.allBoards && (
        <div className="mt-6">
          <Button disabled={pending} size={"lg"} onClick={onClick}>
            Create a board
          </Button>
        </div>
      )}
    </div>
  );
};

export default NoBoardFound;
