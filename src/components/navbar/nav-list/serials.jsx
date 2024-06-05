import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import React from "react";

export default function Serials() {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="hover:underline">
          Serials
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Favourites</DropdownMenuItem>
          <DropdownMenuItem>It airs today</DropdownMenuItem>
          <DropdownMenuItem>On the TV</DropdownMenuItem>
          <DropdownMenuItem>Top Rated</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
