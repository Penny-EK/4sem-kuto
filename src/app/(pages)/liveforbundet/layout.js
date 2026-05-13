"use client";

import { useEffect } from "react";

export default function LiveforbundetLayout({ children }) {
  useEffect(() => {
    document.body.classList.add("liveforbundet");
    return () => {
      document.body.classList.remove("liveforbundet");
    };
  }, []);

  return children;
}
