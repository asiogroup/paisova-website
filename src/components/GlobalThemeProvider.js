"use client";

import { useTina } from "tinacms/dist/react";

export default function GlobalThemeProvider({ children, ...props }) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const global = data?.global;
  
  if (global) {
    // Inject the theme variables dynamically
    if (typeof window !== "undefined") {
      const root = document.documentElement;
      if (global.primaryColor) root.style.setProperty("--primary-color", global.primaryColor);
      if (global.secondaryColor) root.style.setProperty("--secondary-color", global.secondaryColor);
      if (global.accentColor) root.style.setProperty("--accent-color", global.accentColor);
    }
  }

  return <>{children}</>;
}
