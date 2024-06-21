import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import React from "react";
import { Link } from "react-router-dom";
export default function TvShows() {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="hover:underline">
          TV Shows
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link to="/tvshowspopular"> Popular</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to="/tvshowsairingtoday">Airing Today</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to="/tvshowsontv">On TV</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to="/tvshowstoprated">Top Rated</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
