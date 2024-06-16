import React from "react";
import Typography from "../ui/typography";

export default function Footer() {
  return (
    <div className="bg-zinc-900 mt-9 text-white w-full h-fit py-6 px-6 flex  justify-center gap-x-16">
      {/* left side */}

      <div className="flex flex-col items-center gap-y-10">
        <Typography size="3xl" className="text-green-500 flex flex-col">
          Cinema
          <span className="text-5xl px-16">NEX</span>
        </Typography>
        <button className="uppercase text-lg px-3 py-2 rounded-lg hover:shadow-sm shadow-md text-green-500 bg-white font-bold">
          Join the community
        </button>
      </div>
      {/* right side */}
      <div className="py-8 flex items-center gap-x-16">
        <div>
          <Typography size="h4" className="font-bold font-sans uppercase">
            Basic information
          </Typography>
          <Typography size="h5" className="font-medium">
            <ul>
              <li className="cursor-pointer hover:underline"> About TMDB</li>
              <li className="cursor-pointer hover:underline">Contact us</li>
              <li className="cursor-pointer hover:underline">Support forum</li>
              <li className="cursor-pointer hover:underline">API</li>
              <li className="cursor-pointer hover:underline">System status</li>
            </ul>
          </Typography>
        </div>
        <div>
          <Typography size="h4" className="font-bold font-sans uppercase">
            Basic information
          </Typography>
          <Typography size="h5" className="font-medium">
            <ul>
              <li className="cursor-pointer hover:underline"> About TMDB</li>
              <li className="cursor-pointer hover:underline">Contact us</li>
              <li className="cursor-pointer hover:underline">Support forum</li>
              <li className="cursor-pointer hover:underline">API</li>
              <li className="cursor-pointer hover:underline">System status</li>
            </ul>
          </Typography>
        </div>
        <div>
          <Typography size="h4" className="font-bold font-sans uppercase">
            Basic information
          </Typography>
          <Typography size="h5" className="font-medium">
            <ul>
              <li className="cursor-pointer hover:underline"> About TMDB</li>
              <li className="cursor-pointer hover:underline">Contact us</li>
              <li className="cursor-pointer hover:underline">Support forum</li>
              <li className="cursor-pointer hover:underline">API</li>
              <li className="cursor-pointer hover:underline">System status</li>
            </ul>
          </Typography>
        </div>
        <div>
          <Typography size="h4" className="font-bold font-sans uppercase">
            Basic information
          </Typography>
          <Typography size="h5" className="font-medium">
            <ul>
              <li className="cursor-pointer hover:underline"> About TMDB</li>
              <li className="cursor-pointer hover:underline">Contact us</li>
              <li className="cursor-pointer hover:underline">Support forum</li>
              <li className="cursor-pointer hover:underline">API</li>
              <li className="cursor-pointer hover:underline">System status</li>
            </ul>
          </Typography>
        </div>
      </div>
    </div>
  );
}
