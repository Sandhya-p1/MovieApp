import React from "react";
import NavSublistPageLeftSide from "@/components/nav-sublist-page/sublist_page_leftside";
import SublistMoviesTopRatedGallery from "@/components/nav-sublist-page/sublistmoviestopratedgallery";

function NavMoviesTopRatedPage() {
  return (
    <div className="h-full flex gap-9  py-14 px-20 ">
      {/*leftside  */}
      <NavSublistPageLeftSide heading="Top Rated" />
      {/* rightside */}
      <SublistMoviesTopRatedGallery />
    </div>
  );
}

export default NavMoviesTopRatedPage;
