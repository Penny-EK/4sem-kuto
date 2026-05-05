const Label = ({ children, variant = "default" }) => {
  const base = "px-3 py-1 rounded-md text-xs font-semibold uppercase";

  const variants = {
    default: "bg-yellow-300 text-black",
    location: "bg-yellow-300 text-black",
    dark: "bg-black text-white",

    Musik: "bg-blue-300 text-black",
    Dans: "bg-pink-300 text-black",
    Film: "bg-neutral-300 text-black",
    "Foredrag og debat": "bg-purple-300 text-black",
    "Spil og Quiz": "bg-green-300 text-black",
    Madkultur: "bg-orange-300 text-black",
    Udstilling: "bg-cyan-300 text-black",
    Samskabelse: "bg-lime-300 text-black",
    Show: "bg-red-300 text-black",
    Teater: "bg-indigo-300 text-white",
  };

  const variantClass = variants[children] || variants[variant] || variants.default;

  return <small className={`${base} ${variantClass}`}>{children}</small>;
};

export default Label;