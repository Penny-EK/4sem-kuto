"use client";

export default function Search({
  id = "search-input",
  value,
  onChange,
  className = "",
  placeholder = "Søg i indhold...",
}) {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className={className || "w-full max-w-md"}>
      <label className="sr-only" htmlFor={id}>
        Search
      </label>
      <input
        id={id}
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className="h-10 w-full rounded-[5px] border border-slate-300 bg-white px-4 text-sm text-slate-900 transition outline-none placeholder:text-slate-400 focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
      />
    </div>
  );
}
