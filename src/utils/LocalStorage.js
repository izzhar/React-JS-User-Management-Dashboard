export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("users");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Error loading state from local storage:", err);
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("users", serializedState);
  } catch (err) {
    console.error("Error saving state to local storage:", err);
  }
};
