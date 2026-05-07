const SectionWrapper = ({
  children,
  outerClass,
  innerClass,
  gridPosition = "col-[main]",
  padding = "py-9.25",
}) => {
  return (
    <section className={`col-[edge] grid grid-cols-subgrid ${outerClass}`}>
      <div
        className={`grid w-full grid-cols-subgrid ${innerClass} ${gridPosition} ${padding}`}
      >
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
