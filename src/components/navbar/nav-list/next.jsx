import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";

export default function Next() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Next</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Discussion</DropdownMenuItem>
        <DropdownMenuItem>Ranking</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuItem>API</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
