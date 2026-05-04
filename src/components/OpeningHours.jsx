// This component is used in the header and the burger menu to show the opening hours of the two locations. It has a dropdown that shows the opening hours when clicked, and it closes when clicking outside of it. The styling is different for the header and the burger menu, which is determined by the "type" prop.

"use client";
import { useEffect, useRef, useState } from "react";

export default function OpeningHours({ title, type }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((currentOpen) => !currentOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isNav = type === "nav";

  const containerClass = isNav ? "md:relative" : "";
  const panelClass = isNav
    ? "absolute right-0 w-dvw bg-white p-6.25 md:w-150 text-black"
    : "mt-4 w-full bg-transparent p-0 text-white";

  return (
    <div ref={dropdownRef} className={containerClass}>
      <button
        type="button"
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        className="transition duration-200 hover:underline hover:decoration-[#FF8080] hover:decoration-2 hover:underline-offset-4"
      >
        Åbningstider
      </button>

      {isOpen && (
        <div className={panelClass}>
          <h2
            className={`font-['Raleway'] text-3xl font-normal uppercase ${
              isNav ? "text-black" : "text-white"
            }`}
          >
            {title}
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-bold">Kulturværftet</h3>
              <ul>
                <li>mandag 10:00 — 18:00</li>
                <li>tirsdag - onsdag 10:00 — 19:00</li>
                <li>torsdag 10:00 — 20:00</li>
                <li>fredag 10:00 — 18:00</li>
                <li>lørdag 10:00 — 16:00</li>
                <li>søndag 11:00 — 16:00</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold">Toldkammeret</h3>
              <ul>
                <li>mandag - fredag 16:00 — 19:30</li>
                <li>lørdag - søndag Lukket</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
