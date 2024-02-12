"use client";

import { useOthers, useSelf } from "@/liveblocks.config";
import UserAvatar from "./UserAvatar";
import { connectionIdToColor } from "@/lib/utils";

const MAX_SHOW_OTHER_USERS = 2;

const Participants = () => {
  const users = useOthers();
  const currentUser = useSelf();
  const hasMoreUsers = users.length > MAX_SHOW_OTHER_USERS;
  return (
    <div
      className="absolute h-12 top-2 right-2 bg-white rounded-md
    p-3 flex items-center shadow-md"
    >
      <div className="flex gap-x-2">
        {users.slice(0, MAX_SHOW_OTHER_USERS).map(({ connectionId, info }) => {
          return (
            <UserAvatar
              key={connectionId}
              borderColor={connectionIdToColor(connectionId)}
              src={info?.picture}
              name={info?.name}
              fallback={info?.name?.[0] || "G"}
            />
          );
        })}
        {currentUser && (
          <UserAvatar
            borderColor={connectionIdToColor(currentUser.connectionId)}
            src={currentUser.info?.picture}
            name={`${currentUser.info?.name} (You)`}
            fallback={currentUser.info?.name?.[0]}
          />
        )}
        {hasMoreUsers && (
          <UserAvatar
            name={`${users.length - MAX_SHOW_OTHER_USERS} more`}
            fallback={`+${users.length - MAX_SHOW_OTHER_USERS}`}
          />
        )}
      </div>
    </div>
  );
};

export const ParticipantsSkeleton = () => {
  return (
    <div
      className="absolute h-12 top-2 right-2 bg-white rounded-md
      flex items-center shadow-md w-[300px]"
    />
  );
};

export default Participants;
