"use client";

import { cn } from "@/lib/utils";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import Image from "next/image";
import Hint from "../Hint";

type props = {
  id: string;
  name: string;
  imageUrl: string;
};

const Item = (props: props) => {
  const { organization } = useOrganization();
  const { setActive } = useOrganizationList();

  const isActive = organization?.id === props.id;

  const onClick = () => {
    if (!setActive) return;

    setActive({ organization: props.id });
  };

  return (
    <div className="aspect-square relative">
      <Hint label={props.name} side="right" align="start" sideOffset={18}>
        <Image
          src={props.imageUrl}
          fill
          alt={props.name}
          onClick={onClick}
          className={cn(
            "rounded-md cursor-pointer opacity-60 hover:opacity-100 transition",
            isActive && "opacity-100"
          )}
        />
      </Hint>
    </div>
  );
};

export default Item;
