import Link from "next/link";

const LinkButton = ({ href, children = "Call to action" }) => {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center gap-2.5 rounded-[5px] px-3.5 py-2 text-black outline-1 outline-black transition duration-300 hover:bg-zinc-800 hover:text-white hover:underline hover:decoration-[#FF8080] hover:outline-zinc-800 md:px-5 md:py-2.5"
    >
      <span className="justify-start font-['Open_Sans'] text-sm font-semibold md:text-xl">
        {children}
      </span>
    </Link>
  );
};

export default LinkButton;
