"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

// Assets
import Image from "next/image";
import HKlogo from "@/assets/HK-logo.png";
import SKFlogo from "@/assets/SKF-logo.png";

// Icons
import { IoArrowForwardSharp } from "react-icons/io5";

// Components
import Subscribe from "./Subscibe";

const Footer = () => {
  // small links in footer.
  const otherLinks = [
    { href: "/", text: "Biblioteket" },
    { href: "/blog", text: "Kulturhavnen" },
    { href: "/tables", text: "Book Værftmuseet" },
    { href: "/contact", text: "Værftsmadmarked" },
    { href: "/", text: "Værfthallerne" },
    { href: "/blog", text: "Mød vores frivillige " },
    { href: "/tables", text: "Billedskolen" },
    { href: "/contact", text: "BKG Artlab" },
    { href: "/", text: "Artspace transit" },
    { href: "/blog", text: "Helsingør teater " },
    { href: "/tables", text: "Pigegardenen" },
  ];
  //
  function HeaderLinks({ children, href }) {
    return (
      <li>
        <a
          className="justify-start self-stretch font-['Open_Sans'] text-3xl font-bold text-white transition duration-300 hover:underline hover:decoration-[#FF8080] hover:decoration-2 hover:underline-offset-4"
          href={href}
        >
          <span className="flex items-center gap-2">{children}</span>
        </a>
      </li>
    );
  }

  return (
    <footer className="bg-[#1B1B1B] text-white md:grid md:grid-cols-5">
      <Subscribe />
      <ul className="grid gap-3 p-9.25">
        <HeaderLinks href="/forside">Åbningstider</HeaderLinks>
        <HeaderLinks href="/">Find vej</HeaderLinks>
        <HeaderLinks href="/nyheder">Kontakt</HeaderLinks>
        <HeaderLinks href="/mad">Mad</HeaderLinks>
        <HeaderLinks href="/om_os">Booking</HeaderLinks>
        <HeaderLinks href="/om_os">Nyheder</HeaderLinks>
        <HeaderLinks href="/liveforbundet">LiveForbundet</HeaderLinks>
      </ul>

      <ul className="mt-4 mb-8 grid gap-7 p-9.25 md:gap-3">
        {otherLinks.map((link) => {
          return (
            <li key={`${link.href}-${link.text}`}>
              <Link
                href={link.href}
                className="justify-start font-['Open_Sans'] text-xl font-normal text-white"
              >
                <span className="flex items-center gap-2">
                  {link.text} <IoArrowForwardSharp />
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="p-9.25">
        <h2 className="font-bold">Adresser</h2>
        <dl className="mt-4 mb-8 space-y-2">
          <dt className="font-bold">Kulturvæftet</dt>
          <dd className="font-normal">Allegade 23000 Helsingør</dd>
          <dt className="font-bold">Toldkammeret</dt>
          <dd className="font-normal">Havnegade 1, 3000 Helsingør</dd>
        </dl>
      </div>
      <div className="p-9.25">
        <p className="font-bold">kend os på numre</p>

        <ul className="mt-4 mb-8">
          <li className="justify-start self-stretch font-['Open_Sans'] text-xl font-normal text-[#787878] underline">
            <a href="">Instagram</a>
          </li>

          <li className="justify-start self-stretch font-['Open_Sans'] text-xl font-normal text-[#787878] underline">
            <a href=""> Facebook</a>
          </li>

          <li className="justify-start self-stretch font-['Open_Sans'] text-xl font-normal text-[#787878] underline">
            <a href=""> Youtube</a>
          </li>

          <li className="justify-start self-stretch font-['Open_Sans'] text-xl font-normal text-[#787878] underline">
            <a href=""> Nyhedsbreve</a>
          </li>
        </ul>
        <div className="flex w-full justify-end p-9.25">
          <a href="https://www.kunst.dk/">
            <Image src={SKFlogo} alt="SKF Logo" width={80} />
          </a>
        </div>

        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-2 text-[#787878]">
            <a href="">Privatlivspolitik</a>
            <a href="">Handelsbetingelser</a>
          </div>
          <a href="https://www.helsingor.dk/">
            <Image src={HKlogo} alt="HK Logo" width={136} height={40} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
