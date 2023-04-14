import { createContext, useContext } from "react";

const FeedContext = createContext({ isFeed: false });

export function FeedProvider({ children }: { children: React.ReactNode }) {
  return (
    <FeedContext.Provider value={{ isFeed: true }}>
      {children}
    </FeedContext.Provider>
  );
}

export function useFeed() {
  return useContext(FeedContext);
}
