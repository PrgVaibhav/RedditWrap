import React from "react";
import { Posts, PostSkeleton } from "../../components";
import { useApi } from "../../hooks/useApi";
import { useSubreddit } from "../../context/subredditContext";
import { CircleAlert } from "lucide-react";

export const Home = () => {
  const { subreddit } = useSubreddit();
  console.log(`Subreddit: ${subreddit}`);

  const { data, hasError, isLoading } = useApi({
    subreddit: subreddit || "Technology",
  });

  if (isLoading) {
    return (
      <section className="p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(6)].map((_, idx) => (
          <PostSkeleton key={idx} />
        ))}
      </section>
    );
  }

  if (hasError) {
    return (
      <section className="p-5">
        <div className="text-red-500 text-center">{hasError}</div>
      </section>
    );
  }

  const rawPosts = data?.data?.children?.map((d) => d.data) || [];
  const topPosts = [...rawPosts].sort((a, b) => b.score - a.score);

  console.log("Top posts:", topPosts); // for development inspection

  return (
    <section className="p-5 flex flex-col gap-3">
      <div className="rounded-xl border border-blue-500/30 bg-blue-500/10 p-2  shadow-md max-w-max">
        <p className="rubik text-sm text-gray-300 leading-relaxed flex items-center gap-2">
          <CircleAlert size={14} />
          Default subreddit is initialized as Technology
        </p>
      </div>
      <div className="flex flex-wrap items-stretch gap-4 relative w-full m-auto">
        {topPosts.map((post) => (
          <div key={post.id} className="w-full md:w-[45vw] lg:[35vw] relative">
            <Posts post={post} />
          </div>
        ))}
      </div>
    </section>
  );
};
