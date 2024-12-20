import { createContext, useContext, useState } from "react";

const CursorContext = createContext();

export const CursorProvider = ({ children }) => {
  const [initialCursorVariant, ] = useState("cursorLeave");
  const [animateCursorVariant, setAnimateCursorVariant] = useState("cursorLeave");

  const animateCursor = (variant) => setAnimateCursorVariant(variant);

  return (
    <CursorContext.Provider
      value={{
        initialCursorVariant,
        animateCursorVariant,
        animateCursor,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
};

export const useCursorContext = () => {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error("useCursorContext must be used within a CursorProvider");
  }
  return context;
};
