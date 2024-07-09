import NavSublistPageLeftSide from "@/components/nav-sublist-page/sublist_page_leftside";
import { TvShowsListType } from "@/components/nav-sublist-page/tv-shows-list-type";
import React from "react";

export function TvShowsSubListPage({ queryKey, heading }) {
  return (
    <div className="h-full flex gap-9  py-14 px-20 ">
      {/* leftside */}
      <NavSublistPageLeftSide heading={heading} />
      {/* rightside */}
      <TvShowsListType queryKey={queryKey} />
    </div>
  );
}
