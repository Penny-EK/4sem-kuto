"use client";
import { useEffect, useRef, useState } from "react";

// Assets
import Image from "next/image";
import logo from "@/assets/KV-logo.svg";
import LFlogo from "@/assets/LF-logo.png";

// Icons
import { IoSearch } from "react-icons/io5";
import { IoMenuSharp } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  function HeaderLinks({ children, href }) {
    return (
      <a
        className="flex justify-start font-['Raleway'] text-3xl font-bold uppercase transition duration-300 hover:underline hover:decoration-[#FF8080] hover:decoration-2 hover:underline-offset-4"
        href={href}
      >
        {children}
      </a>
    );
  }

  function OpeningHours({ title, type }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
      setIsOpen((currentOpen) => !currentOpen);
    };

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target)
        ) {
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="header mx-9.5 my-5.75 flex items-center justify-between">
      <a href="#index">
        <Image src={logo} alt="Logo" width={120} height={120} />
      </a>
      <div className="flex gap-5">
        {/* opening hours */}
        <OpeningHours title="Åbningstider" type="nav" />
        {/* search button */}
        <IoSearch size={25} />
        <div ref={menuRef}>
          {/* menu button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((currentOpen) => !currentOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="header-menu-panel"
            className="transition duration-200 hover:opacity-70"
          >
            <IoMenuSharp size={25} />
          </button>
          {isMenuOpen && (
            <div
              id="header-menu-panel"
              className="absolute top-0 right-0 h-dvh w-dvw max-w-194 bg-[#1B1B1B] p-9.5 text-white"
            >
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsMenuOpen(false)}
                  className="mb-6 text-sm tracking-wider text-white/70 uppercase transition hover:text-white"
                >
                  <IoCloseSharp size={25} />
                </button>
              </div>
              <nav className="flex flex-col gap-5">
                <HeaderLinks href="/forside">Forside</HeaderLinks>
                <HeaderLinks href="/">Kalender</HeaderLinks>
                <HeaderLinks href="/nyheder">Nyheder</HeaderLinks>
                <HeaderLinks href="/mad">Mad</HeaderLinks>
                <HeaderLinks href="/om_os">Om os</HeaderLinks>
                <HeaderLinks href="/om_os">Kontakt</HeaderLinks>
                <HeaderLinks href="/liveforbundet">
                  <Image src={LFlogo} alt="Logo" width={30} height={33} />
                  <p>LiveForbundet</p>
                </HeaderLinks>
              </nav>
              <OpeningHours type="burgermenu" />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
