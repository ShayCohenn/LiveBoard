"use client";

import { ClientSideSuspense } from "@liveblocks/react";
import { RoomProvider } from "@/liveblocks.config";

type props = {
    children: React.ReactNode
    roomId: string
    fallback: NonNullable<React.ReactNode> | null
}

const Room = (props: props) => {
  return (
    <RoomProvider id={props.roomId} initialPresence={{}}>
      <ClientSideSuspense fallback={props.fallback}>
        {() => props.children}
      </ClientSideSuspense>
    </RoomProvider>
  );
};

export default Room;
