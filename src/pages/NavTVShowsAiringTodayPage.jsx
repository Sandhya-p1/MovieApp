import NavSublistPageLeftSide from "@/components/nav-sublist-page/sublist_page_leftside";
import SublistTVShowsAiringTodayGallery from "@/components/nav-sublist-page/sublisttvshowsairingtodaygallery";
import React from "react";

function NavTVShowsAiringTodayPage() {
  return (
    <div className="h-full flex gap-9  py-14 px-20 ">
      {/* leftside */}
      <NavSublistPageLeftSide heading="Airing Today" />
      {/* rightside */}
      <SublistTVShowsAiringTodayGallery />
    </div>
  );
}

export default NavTVShowsAiringTodayPage;
