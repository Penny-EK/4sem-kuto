const Button = ({ href, children = "Call to action" }) => {
  return (
    <button
      href={href}
      className="inline-flex items-center justify-center gap-2.5 rounded-[5px] bg-[#1B1B1B] px-3.5 py-2 text-white outline-1 outline-black transition duration-300 hover:bg-zinc-800 hover:underline hover:decoration-[#FF8080] hover:decoration-2 hover:underline-offset-4 hover:outline-zinc-800 md:px-5 md:py-2.5"
    >
      <span className="justify-start font-['Open_Sans'] text-sm font-semibold md:text-xl">
        {children}
      </span>
    </button>
  );
};

export default Button;
