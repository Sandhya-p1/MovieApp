import { cn } from "@/lib/utils";
import React from "react";

export default function Typography({ children, className, size = "default" }) {
  const SIZE = {
    default: "text-normal",
    xs: "text-xs",
    sm: "text-sm",
    lg: "text-lg font-medium",
    xl: "text-xl font-semibold",
    "2xl": "text-2xl font-semibold",
    "3xl": "text-3xl font-bold",
    "4xl": "text-4xl font-bold",
    "5xl": "text-5xl font-bold",
    "6xl": "text-6xl font-bold",
    "7xl": "text-7xl font-bold",
    "8xl": "text-8xl font-bold",
    "9xl": "text-9xl font-bold",
    h6: "text-sm",
    h5: "text-base",
    h4: "text-lg",
    h3: "text-xl",
    h2: "text-2xl",
    h1: "text-3xl",
  };
  const textSize = SIZE[size];
  return <div className={cn(textSize, className)}>{children}</div>;
}
