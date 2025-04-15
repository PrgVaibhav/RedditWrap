import { useState } from "react";

export const useLocalStorage = (key, initialValue = []) => {
  const [localData, setLocalData] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialValue;
    } catch (error) {
      console.error("Error parsing local storage data: ", error);
      return initialValue;
    }
  });

  console.log(
    "🧾 Current LocalStorage:",
    JSON.parse(localStorage.getItem(key))
  );

  const addToLocalStorage = (data) => {
    if (!data) {
      return alert("Data is needed to store in local storage");
    }

    const stored = JSON.parse(localStorage.getItem(key)) || [];
    const alreadyExists = stored.find((item) => item.id === data.id);

    if (alreadyExists) {
      return alert("Post already in your saved folder");
    }

    const updated = [...stored, data];
    localStorage.setItem(key, JSON.stringify(updated));
    setLocalData(updated); // ensures UI gets updated too
  };

  const removeFromLocalStorage = (id) => {
    if (!id) {
      return alert("No id found for the post!!");
    }

    const updatedList = localData.filter((data) => data.id !== id);

    setLocalData(updatedList);
  };

  return { localData, addToLocalStorage, removeFromLocalStorage };
};
