"use client";

import { useQuery } from "convex/react";
import NoBoardFound from "./no-boards-found";
import { api } from "@/convex/_generated/api";
import { BoardCard } from "./board-card";

type props = {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
};

const BoardList = (props: props) => {
  const data = useQuery(api.boards.get, { orgId: props.orgId });

  if (data === undefined) {
    return <div>Loading...</div>;
  }

  if (!data?.length && props.query.search) {
    return (
      <NoBoardFound
        image="empty-search.svg"
        header="No results found..."
        p="Try searching for something else"
      />
    );
  }

  if (!data?.length && props.query.favorites) {
    return (
      <NoBoardFound
        image="empty-favorites.svg"
        header="No results found..."
        p="Try adding something to your favorites"
      />
    );
  }

  if (!data?.length) {
    return (
      <NoBoardFound
        image="note.svg"
        header="Create your first LiveBoard!"
        p="Start by creating a LiveBoard for your organization"
        size={110}
        allBoards
      />
    );
  }
  return (
    <div>
      <h2 className="text-3xl">
        {props.query.favorites ? "Favorite Boards" : "Team Boards"}
      </h2>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 
      lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10"
      >
        {data?.map((board) => (
          <BoardCard
            key={board._id}
            id={board._id}
            title={board.title}
            imageUrl={board.imageUrl}
            authorId={board.authorId}
            authorName={board.authorName}
            createdAt={board._creationTime}
            orgId={board.orgId}
            isFavorite={false}
          />
        ))}
      </div>
    </div>
  );
};

export default BoardList;
