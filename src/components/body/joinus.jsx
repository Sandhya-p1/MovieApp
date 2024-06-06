import React from "react";
import Typography from "../ui/typography";
import { Button } from "../ui/button";

export default function JoinUs() {
  return (
    <div className="w-full h-80 bg-purple-950 relative shadow-black shadow-sm ">
      <img
        src="https://assets.mubicdn.net/images/notebook/post_images/36485/images-w1400.jpg?1670783534"
        className="object-cover object-center rounded-sm h-full w-full opacity-10"
      />
      <div className="absolute top-0 px-9 py-7 text-white space-y-4">
        <Typography size="3xl">Join us</Typography>
        <div className="flex gap-x-10">
          <div className="w-[55%] space-y-5 ">
            <Typography size="h4" className="font-medium w-full ">
              Get access to maintain your own{" "}
              <span className="italic text-gray-400 font-normal">
                custom personal lists , track what you've seen
              </span>{" "}
              and search and filter for
              <span className="italic text-gray-400 font-normal">
                {" "}
                what to watch next
              </span>
              —regardless if it's in theaters, on TV or available on popular
              streaming services like Disney Plus, Netflix, Amazon Prime Video,
              O2 TV, and MUBI.
            </Typography>
            <button className="px-3 py-2 bg-green-800  hover:bg-green-700 font-medium rounded-lg">
              Register
            </button>
          </div>

          <div className="flex flex-col items-start text-gray-300 ">
            <li>Enjoy TMDB without ads</li>
            <li>Keep your list of movies and series to watch</li>
            <li>
              Filter movies and series according to your streaming services
            </li>
            <li>Keep a list of the movies and series you've seen</li>
            <li>Create your own lists</li>
            <li>Contribute and improve our database</li>
          </div>
        </div>
      </div>
    </div>
  );
}
