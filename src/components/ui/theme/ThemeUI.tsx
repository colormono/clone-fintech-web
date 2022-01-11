import React from "react";
import { ThemeProvider } from "next-themes";
import { ThemeContext, defaultTheme } from "./";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const ThemeUI: React.FC<Props> = ({ children }) => {
  const value = {
    theme: defaultTheme,
  };

  return (
    <ThemeProvider attribute="class">
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    </ThemeProvider>
  );
};

export default ThemeUI;
