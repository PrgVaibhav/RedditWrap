import { useState } from "react";

export const useSubreddit = () => {
  const [subreddit, setSubreddit] = useState("");

  return { subreddit, setSubreddit };
};
