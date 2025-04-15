import React from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Posts } from "../../components";

export const Saved = () => {
  const { localData } = useLocalStorage("localData");

  return (
    <section className="p-5 flex flex-col gap-3">
      <div className="flex flex-wrap items-stretch  gap-4 relative">
        {localData.map((post) => (
          <div key={post.id} className="w-full sm:w-[30vw]  relative m-auto">
            <Posts post={post} />
          </div>
        ))}
      </div>
    </section>
  );
};
