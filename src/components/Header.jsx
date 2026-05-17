"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

// Assets
import Image from "next/image";
import logo from "@/assets/KV-logo.svg";
import LFlogo from "@/assets/LF-logo.png";

// Icons
import { IoSearch } from "react-icons/io5";
import { IoMenuSharp } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { IoArrowForwardSharp } from "react-icons/io5";

// Components
import OpeningHours from "./OpeningHours";
import Search from "@/components/Search";

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  // const [searchValue, setSearchValue] = useState("");
  const menuRef = useRef(null);

  const navLinks = [
    { href: "/forside", text: "Forside" },
    { href: "/", text: "Kalender" },
    { href: "/nyheder", text: "Nyheder" },
    { href: "/mad", text: "Mad" },
    { href: "/om_os", text: "Om os / kontakt" },
    { href: "/liveforbundet", text: "Liveforbundet" },
  ];

  function HeaderLinks({ children, href, className = "", style }) {
    const isActive = pathname === href;
    return (
      <a
        className={`flex cursor-pointer items-center justify-start gap-2 font-['Raleway'] text-3xl font-bold uppercase transition duration-300 hover:underline hover:decoration-[#FF8080] hover:decoration-2 hover:underline-offset-4 ${isActive ? "underline decoration-[#fc5757] decoration-2 underline-offset-4" : ""} ${className} ${pathname === "/liveforbundet" ? "text-white" : ""}`}
        href={href}
        style={style}
      >
        {children}
      </a>
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
    <header
      className={`header z-50 my-5.75 ${pathname === "/liveforbundet" ? "text-white" : "text-black"}`}
    >
      <div className="flex items-start justify-between gap-5 md:items-center">
        <a href="/forside">
          <Image
            src={pathname === "/liveforbundet" ? LFlogo : logo}
            alt={pathname === "/liveforbundet" ? "Liveforbundet logo" : "Logo"}
            width={pathname === "/liveforbundet" ? "60" : "120"}
            height={pathname === "/liveforbundet" ? "60" : "120"}
          />
        </a>

        {/* show opening hours if not on liveforbundet page */}
        <div className="flex flex-1 items-center justify-end gap-5">
          {pathname !== "/liveforbundet" && (
            <OpeningHours title="Åbningstider" type="nav" />
          )}
          {/* show search button if not on liveforbundet page */}
          {pathname !== "/liveforbundet" && (
            <div className="grid items-center gap-3">
              <button
                type="button"
                onClick={() => setIsSearchOpen((currentOpen) => !currentOpen)}
                aria-expanded={isSearchOpen}
                aria-controls="header-search-panel-desktop header-search-panel-mobile"
                className="inline-flex h-10 w-10 items-center justify-center leading-none transition duration-200 hover:opacity-70"
              >
                <IoSearch size={25} />
              </button>
            </div>
          )}
          {pathname == "/liveforbundet" && (
            <a
              className="curver-pointer justify-start font-['Raleway'] leading-9 font-bold text-white transition duration-200 hover:underline hover:decoration-[#FFE438] hover:decoration-2 hover:underline-offset-4"
              href="/forside"
            >
              Kuto.dk
            </a>
          )}
          <div ref={menuRef}>
            {/* menu button */}
            <button
              type="button"
              onClick={() => setIsMenuOpen((currentOpen) => !currentOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="header-menu-panel"
              className="inline-flex h-10 w-10 items-center justify-center leading-none transition duration-200 hover:opacity-70"
            >
              <IoMenuSharp size={25} className="curver-pointer" />
            </button>
            {isMenuOpen && (
              <div
                id="header-menu-panel"
                className="animate-slide-in-right fixed top-0 right-0 z-100 h-full w-dvw max-w-194 bg-[#1B1B1B] p-9.5 text-white"
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

                {/* burgermenu */}
                <nav className="mb-6 flex flex-col gap-5">
                  {navLinks.map((link, index) => {
                    const isActive = pathname === link.href;
                    const fadeDelay = 0.3 + index * 0.08;
                    return (
                      <HeaderLinks
                        key={`${link.href}-${link.text}`}
                        href={link.href}
                        isActive={isActive}
                        className="animate-fade-in opacity-0"
                        style={{ animationDelay: `${fadeDelay}s` }}
                      >
                        {link.href === "/liveforbundet" && (
                          <Image
                            src={LFlogo}
                            alt="Liveforbundet logo"
                            width={20}
                            height={20}
                          />
                        )}
                        {link.text}
                        {link.href === "/liveforbundet" && (
                          <IoArrowForwardSharp size={20} />
                        )}
                      </HeaderLinks>
                    );
                  })}
                </nav>
                <span className="flex items-center gap-2 text-sm tracking-wider text-white/70">
                  <OpeningHours type="burgermenu" />
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
      {isSearchOpen && (
        <div id="header-search-panel-mobile" className="mt-3">
          <Search />
        </div>
      )}
    </header>
  );
};

export default Header;
