import { tmdb } from "@/assets/config/tmdb-client";
import { IMG_BASE } from "@/components/body/movies-collection/moviecard";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Typography from "@/components/ui/typography";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import React from "react";

function NavPeoplePopularPeoplePage() {
  const { data: peoples, isLoading } = useQuery({
    queryKey: ["popularpeople"],
    queryFn: async () =>
      tmdb.get("person/popular").then((res) => res.data.results),
  });

  if (isLoading)
    return (
      <div className="flex items-center gap-x-1 justify-center my-52">
        <Loader2 className="animate-spin" />
        <Typography size="h3">Loading...</Typography>
      </div>
    );
  return (
    <div className="flex flex-col gap-6 px-24 py-7">
      <Typography size="h2" className=" w-fit p-2 font-bold">
        Popular People
      </Typography>
      <div className="grid grid-cols-5 gap-7">
        {peoples &&
          peoples.map((people) => {
            const knownForText = people.known_for
              .filter((known) => known.title)
              .map((known) => known.title)
              .join(", ");
            return (
              <div className="flex flex-col">
                <img
                  src={IMG_BASE + people.profile_path}
                  className="h-72 w-full object-cover object-center rounded-lg shadow-md"
                />
                <div className="py-2 flex flex-col line-clamp-4">
                  <Typography size="lg" className="leading-5">
                    {people.original_name}
                  </Typography>
                  <HoverCard>
                    <HoverCardTrigger>
                      <Typography
                        size="h6"
                        className="text-gray-500 line-clamp-2"
                      >
                        {knownForText}
                      </Typography>
                    </HoverCardTrigger>
                    <HoverCardContent className="text-sm text-muted-foreground">
                      {knownForText}
                    </HoverCardContent>
                  </HoverCard>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default NavPeoplePopularPeoplePage;
