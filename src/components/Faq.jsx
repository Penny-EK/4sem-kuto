"use client";

import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const Faq = ({ children, title }) => {
  const [open, setOpen] = useState(false);
  const id = `faq-${String(title)
    .replace(/[^a-z0-9]+/gi, "-")
    .toLowerCase()}`;

  return (
    <div className="border-b border-[#787878]">
      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        aria-expanded={open}
        aria-controls={id}
        className="flex w-full cursor-pointer items-center justify-between py-2"
      >
        {/* Click to expand/collapse */}
        <h3 className="text-left">{title}</h3>
        {/* Expand/collapse icon */}
        <span
          className={`transform transition-transform ${open ? "rotate-0" : "rotate-45"}`}
        >
          <IoCloseSharp size={25} />
        </span>
      </button>

      {/* FAQ content */}
      <div id={id} className={`${open ? "block" : "hidden"} py-2`}>
        {children}
      </div>
    </div>
  );
};

export default Faq;
