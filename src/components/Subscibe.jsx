import Button from "./Button";

const Subscribe = () => {
  return (
    <div className="flex flex-col items-start justify-center gap-6 bg-[#F9F9F9] p-9.25 text-black">
      <h2 className="mb-6">Modtag vores nyhedsmail</h2>
      <p className="mb-6">
        og få nyt fra vores fællesskaber på Kulturværftet og i Toldkammeret hver
        fredag.
      </p>
      <div>
        <Button>Tilmeld her</Button>
      </div>
    </div>
  );
};

export default Subscribe;
