const Label = ({ children, variant = "default" }) => {
    const base = "px-3 py-1 rounded-md text-xs font-semibold uppercase";
  
    const variants = {
      default: "bg-yellow-300 text-black",
      location: "bg-yellow-300 text-black",
      music: "bg-blue-300 text-black",
      food: "bg-green-300 text-black",
      art: "bg-purple-300 text-black",
      dark: "bg-black text-white",
    };
  
    const variantClass = variants[variant] || variants.default;
  
    return <small className={`${base} ${variantClass}`}>{children}</small>;
  };
  
  export default Label;