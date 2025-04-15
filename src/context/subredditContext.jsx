// SubredditContext.js
import { createContext, useContext, useState } from "react";

const SubredditContext = createContext();

export const SubredditProvider = ({ children }) => {
  const [subreddit, setSubreddit] = useState("");
  return (
    <SubredditContext.Provider value={{ subreddit, setSubreddit }}>
      {children}
    </SubredditContext.Provider>
  );
};

export const useSubreddit = () => useContext(SubredditContext);
