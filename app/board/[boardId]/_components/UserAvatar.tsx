import Hint from "@/components/Hint";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type props = {
  src?: string;
  name?: string;
  fallback?: string;
  borderColor?: string;
};

const UserAvatar = (props: props) => {
  return (
    <Hint label={props.name || "Guest"} side="bottom" sideOffset={10}>
      <Avatar
        className="h-8 w-8 border-2"
        style={{ borderColor: props.borderColor }}
      >
        <AvatarImage src={props.src}/>
        <AvatarFallback className="text-xs font-semibold">
            {props.fallback}
        </AvatarFallback>
      </Avatar>
    </Hint>
  );
};

export default UserAvatar;
