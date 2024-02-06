"use client";

import NoBoardFound from "./no-boards-found";

type props = {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
};

const BoardList = (props: props) => {
  const data = []; //TODO: Change to API call

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
  return <div>{JSON.stringify(props.query)}</div>;
};

export default BoardList;
