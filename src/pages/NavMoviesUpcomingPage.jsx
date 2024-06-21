import NavSublistPageLeftSide from "@/components/nav-sublist-page/sublist_page_leftside";
import SublistMoviesUpcomingGallery from "@/components/nav-sublist-page/sublistmoviesupcominggallery";
import React from "react";

function NavMoviesUpcomingPage() {
  return (
    <div className="h-full flex gap-9  py-14 px-20 ">
      {/* left side */}
      <NavSublistPageLeftSide heading="Upcoming" />
      {/* right side */}
      <SublistMoviesUpcomingGallery />
    </div>
  );
}

export default NavMoviesUpcomingPage;
