import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import React from "react";
import { Link } from "react-router-dom";

export default function People() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>People</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem className="p-1">
          <Link to="/peoplepopularpeople">Popular people</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
