import { cn } from "@/lib/utils";
import React from "react";

export default function SearchBar({
  endIcon,
  startIcon,
  className,
  placeholder,
  round = "default",
  size = "default",
}) {
  const ROUNDED = {
    default: "rounded-sm",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    xxl: "rounded-2xl",
    full: "rounded-full",
  };
  const SIZE = {
    default: "px-2 py-1",
    sm: "px-2 py-1",
    md: "px-3 py-2",
    lg: "px-4 py-3",
  };
  const boxSize = SIZE[size];
  const inputRound = ROUNDED[round];
  return (
    <div className="flex items-center">
      <span>{startIcon && startIcon}</span>
      <input
        type="search"
        placeholder={placeholder}
        className={cn(
          "outline-none border-none text-black bg-white placeholder:text-gray-400",
          className,
          inputRound,
          boxSize
        )}
      />
      <span>{endIcon && endIcon}</span>
    </div>
  );
}
