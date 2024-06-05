import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import React from "react";

export default function People() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>People</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Favorite people</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
