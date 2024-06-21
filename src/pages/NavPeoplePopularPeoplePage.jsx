import { tmdb } from "@/assets/config/tmdb-client";
import { IMG_BASE } from "@/components/body/movies-collection/moviecard";
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
  console.log("Popular people:", peoples);
  return (
    <div className="flex flex-col gap-5 px-24 py-7">
      <Typography size="h2" className=" w-fit p-2 font-bold">
        Popular People
      </Typography>
      <div className="grid grid-cols-4 gap-7">
        {peoples &&
          peoples.map((people) => (
            <div className="flex flex-col border shadow-md rounded-t-md rounded-b-sm">
              <img
                src={IMG_BASE + people.profile_path}
                className="h-80 w-full object-cover object-center rounded-t-md"
              />
              <div className="px-3 py-2 flex flex-col line-clamp-4">
                <Typography size="lg" className="leading-5">
                  {people.original_name}
                </Typography>
                <Typography size="h6" className="text-gray-500">
                  {people.known_for
                    .filter((known) => known.title)
                    .map((known) => known.title)
                    .join(", ")}
                </Typography>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default NavPeoplePopularPeoplePage;
