import { Button } from "@/components/ui/button";
import Image from "next/image";

type props = {
    image: string;
    header: string;
    p:string
    size?: number
    allBoards?: boolean
}

const NoBoardFound = (props:props) => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image
        src={props.image}
        alt="No results"
        width={props.size ? props.size : 140}
        height={props.size ? props.size : 140}
      />
      <h2 className="text-2xl font-semibold mt-6">{props.header}</h2>
      <p className="text-muted-foreground text-sm mt-2">
        {props.p}
      </p>
      {props.allBoards && (
        <div className="mt-6">
          <Button size={"lg"}>
            Create a board
          </Button>
        </div>
      )}
    </div>
  );
};

export default NoBoardFound;
