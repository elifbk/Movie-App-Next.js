import Movies from "@/components/Movies";
import React from "react";

const Page = async ({ params }) => {
  const keyword = params.keyword;

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=78a1b8fc134f359e3ee776aee0e6427d&query=${keyword}&language=en-US&page=1&include_adult=false`
  );
  const data = await res.json();

  return (
    <div>
      {!data?.results ? (
        <div>Aranılan film bulunamadı ..</div>
      ) : (
        <div className="flex gap-5 justify-center items-center flex-wrap">
          {data?.results?.map((dt, i) => (
            <Movies key={i} dt={dt} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;
