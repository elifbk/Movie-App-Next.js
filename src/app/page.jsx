import Movies from "@/components/Movies";
import React from "react";

const Page = async ({ searchParams }) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      searchParams.genre
        ? "movie/" + searchParams.genre
        : "trending/latest/upcoming"
    }?api_key=78a1b8fc134f359e3ee776aee0e6427d&language=en-US&page=1`,
    { next: { revalidate: 1000 } }
  );

  const data = await res.json();

  return (
    <div className="flex items-center justify-center flex-wrap gap-3">
      {data?.results?.map((dt, i) => (
        <Movies key={i} dt={dt} />
      ))}
    </div>
  );
};

export default Page;
