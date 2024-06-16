// import { Tabs } from "@/components/ui/tabs";
import Typography from "@/components/ui/typography";
import React from "react";

export default function Title({ headings, children }) {
  return (
    <div className="flex items-center gap-x-4 ">
      <Typography size="h2" className="font-bold">
        {headings}
      </Typography>
      {/* <Tabs>{children}</Tabs> */}
      {children}
    </div>
  );
}
