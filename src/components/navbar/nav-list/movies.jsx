import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import { Link } from "react-router-dom";

function Movies() {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="hover:underline">
          Movies
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link to="/moviespopular"> Popular</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>It's playing now</DropdownMenuItem>
          <DropdownMenuItem>Coming</DropdownMenuItem>
          <DropdownMenuItem>Top Rated</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

export default Movies;
