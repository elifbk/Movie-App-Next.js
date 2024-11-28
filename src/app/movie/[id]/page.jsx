"use client";

import Image from "next/image";
import React from "react";

const getMovie = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=78a1b8fc134f359e3ee776aee0e6427d`
  );

  return await res.json();
};

const Page = async ({ params }) => {
  const id = params.id;
  const movieDetail = await getMovie(id);

  console.log(movieDetail);
  return (
    <div className="flex justify-center">
      <div className="relative p-7 w-[90%] h-screen">
        <Image
          className=""
          style={{ objectFit: "cover" }}
          fill
          src={`https://image.tmdb.org/t/p/original/${
            movieDetail?.backdrop_path || movieDetail?.poster_path
          }`}
          alt="movie"
        />

        <div className="absolute">
          <div className="text-4xl font-bold my-3">{movieDetail?.title}</div>
          <div className="w-1/2">{movieDetail?.overview}</div>
          <div className="my-3">
            {movieDetail?.release_date} - {movieDetail?.vote_average}
          </div>
          <div className="border w-32 p-2 my-2 hover:bg-white hover:text-black rounded-md text-center text-lg cursor-pointer">
            Trail
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
