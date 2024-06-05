import React from "react";
import Typography from "../../ui/typography";
import { Tabs, TabsList, TabsTrigger } from "../../ui/tabs";
import MoviesList from "./movieslist";

export default function MostVisited() {
  return (
    <div className="px-8 space-y-5 w-full overflow-scroll no-scrollbar ">
      <div className="text-black flex items-center gap-x-4 ">
        <Typography size="2xl">Most Visited</Typography>
        <Tabs defaultValue="today" className="w-[15%] ">
          <TabsList className="border bg-white border-black rounded-full w-full">
            <TabsTrigger
              value="today"
              className="border-none w-full duration-500 bg-black text-green-500 rounded-full"
            >
              Today
            </TabsTrigger>
            <TabsTrigger
              value="thisweek"
              className="border-none w-full  duration-500 bg-black text-green-500 rounded-full"
            >
              This Week
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      {/* movies list */}
      <div className="flex items-center gap-x-5   overflow-x-scroll no-scrollbar w-full ">
        <MoviesList />
        <MoviesList />
        <MoviesList />
        <MoviesList />
        <MoviesList />
        <MoviesList />
        <MoviesList />
        <MoviesList />
        <MoviesList />
        <MoviesList />
        <MoviesList />
        <MoviesList />
        <MoviesList />
        <MoviesList />
        <MoviesList />
        <MoviesList />
      </div>
    </div>
  );
}
