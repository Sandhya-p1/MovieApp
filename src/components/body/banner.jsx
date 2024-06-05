import React from "react";

import Typography from "../ui/typography";
import SearchBar from "../ui/searchbar";

export default function Banner() {
  return (
    <div className=" h-screen  ">
      <div className="h-[70%] w-full">
        {/* 1st box */}
        <div className="relative h-[60%] w-full   text-gray-50 ">
          <img
            src="https://img.freepik.com/free-vector/clapper-board-with-film-reel-cinema-movie-background_1017-26096.jpg"
            alt="Movie Banner"
            className=" object-cover w-full h-full brightness-75  "
          />
          <div className="absolute top-0 px-14 translate-y-20  opacity-100  ">
            <Typography size="5xl" className="font-serif">
              Welcome
            </Typography>

            <Typography className="font-mono" size="2xl">
              Discover millions of movies, series, characters and personalities.
              Get started now.
            </Typography>
            <div className="w-full ">
              <SearchBar
                placeholder="Search for a movie,series,person...."
                round="xxl"
                size="md"
                className="w-full my-6"
                endIcon={
                  <button className="rounded-2xl hover:brightness-95 px-5 -ml-10 py-2 bg-gradient-to-tr from-green-500 via-green-600 to-green-700">
                    Search
                  </button>
                }
              />
            </div>
          </div>
        </div>
        {/* 2nd box */}
        <div className="h-[80%] bg-gradient-to-tr from-yellow-400 via-orange-400 to-pink-600 rounded-b-sm">
          <div className="border flex-col flex items-center justify-center mx-20 p-8 rounded-2xl gap-x-6 text-white translate-y-10">
            <div className="flex items-center justify-center gap-x-6">
              <Typography></Typography>
              <Typography></Typography>
              <Typography></Typography>

              <Typography size="2xl">T</Typography>
              <Typography size="2xl">H</Typography>
              <Typography size="2xl">E</Typography>
              <Typography size="8xl" className="font-serif">
                COME
                <hr className="my-4  border" />
              </Typography>

              <Typography size="2xl" className="text">
                L
              </Typography>
              <Typography size="2xl">AND</Typography>
              <Typography size="2xl">WITH</Typography>
              <Typography size="2xl">T</Typography>
            </div>
            <Typography size="text-lg" className="my-2 italic">
              A list of some of the best in genre in celebration of Pride Month.
            </Typography>
            <button className="px-4 py-3 hover:shadow-sm my-5 border-2 rounded-full font-bold ">
              Check out the list
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
