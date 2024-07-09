import { MoviesListType } from "@/components/nav-sublist-page/movies-list-type";
import NavSublistPageLeftSide from "@/components/nav-sublist-page/sublist_page_leftside";

import React, { useState } from "react";

export function MoviesSubListPage({ heading, queryKey }) {
  const [sortType, setSortType] = useState();
  return (
    <div className="h-full flex gap-9  py-14 px-20 ">
      <NavSublistPageLeftSide
        heading={heading}
        sortType={sortType}
        setSortType={setSortType}
      />
      <MoviesListType sortType={sortType} queryKey={queryKey} />
    </div>
  );
}
