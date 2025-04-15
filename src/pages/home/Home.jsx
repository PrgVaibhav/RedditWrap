import React from "react";
import { Posts, PostSkeleton } from "../../components";
import { useApi } from "../../hooks/useApi";
import { useSubreddit } from "../../context/subredditContext";

export const Home = () => {
  const { subreddit } = useSubreddit();

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

  return (
    <section className="p-5 flex flex-col gap-3">
      <div className="rounded-xl border border-blue-500/30 bg-blue-500/10 p-2 shadow-md max-w-max">
        <p className="rubik text-sm text-gray-300 leading-relaxed flex items-center gap-2">
          Default subreddit is initialized as Technology, and also from default
          you will see the top posts from any subreddit.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        {topPosts.map((post) => (
          <Posts key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};
