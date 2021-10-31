import { useState, useEffect } from "react";

// Custom hook for keeping state data synced with localStorage
function useLocalStorage(key, firstValue = null) {
  const initialValue = localStorage.getItem(key) || firstValue;

  const [item, settItem] = useState(initialValue);

  useEffect(() => {
    if (item === null) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, item);
    }
  }, [key, item]);

  return [item, settItem];
}

export default useLocalStorage;
