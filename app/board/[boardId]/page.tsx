import Canvas from "./_components/Canvas";
import Room from "@/components/Room";
import Loading from "./_components/Loading";

type props = {
  params: {
    boardId: string;
  };
};

const page = (props: props) => {
  return (
    <Room roomId={props.params.boardId} fallback={<Loading/>}>
      <Canvas boardId={props.params.boardId} />
    </Room>
  );
};

export default page;
