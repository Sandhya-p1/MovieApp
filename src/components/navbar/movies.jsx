import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

function Movies() {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="hover:underline">
          Movies
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Favourites</DropdownMenuItem>
          <DropdownMenuItem>It's playing now</DropdownMenuItem>
          <DropdownMenuItem>Coming</DropdownMenuItem>
          <DropdownMenuItem>Top Rated</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

export default Movies;
