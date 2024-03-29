"use client";

import { useOrganization } from "@clerk/nextjs";
import EmptyOrg from "./_components/empty-org";
import BoardList from "./_components/BoardList";

type props = {
  searchParams: {
    search?: string;
    favorites?: string;
  };
};

const page = (props: props) => {
  const { organization } = useOrganization();

  return (
    <div className="flex-1 h-[calc(100%-80px)] p-6">
      {!organization ? (
        <EmptyOrg />
      ) : (
        <BoardList orgId={organization.id} query={props.searchParams} />
      )}
    </div>
  );
};

export default page;
