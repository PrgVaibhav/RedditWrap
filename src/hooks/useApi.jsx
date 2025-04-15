import axios from "axios";
import React from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";

export const useApi = ({ subreddit = "programming", limit = 30 }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setHasError(false);
    try {
      const response = await axios.get(
        `https://www.reddit.com/r/${subreddit}/new.json?limit=${limit}`
      );
      //   console.log(response
      if (response.status === 200) {
        setData(response.data);
      }
    } catch (error) {
      console.error(`Error fetching ${subreddit}, error: ${error}`);
      setHasError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [subreddit, limit]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, hasError, refetch: fetchData };
};
