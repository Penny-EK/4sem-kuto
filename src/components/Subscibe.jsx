import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import SubscribeForm from "./SubscribeForm";

const Subscribe = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
   
    };
  }, [isOpen]);

  return (
    <div className="flex flex-col items-start justify-center gap-6 bg-[#F9F9F9] p-9.25 text-black">
      <h2 className="mb-6">Modtag vores nyhedsmail</h2>
      <p className="mb-6">
        og få nyt fra vores fællesskaber på Kulturværftet og i Toldkammeret hver
        fredag.
      </p>
      <div>
        <Button onClick={open}>Tilmeld her</Button>
      </div>

      {isOpen && (
        <div ref={modalRef} className="relative z-50">
          <SubscribeForm onClose={close} />
        </div>
      )}
    </div>
  );
};

export default Subscribe;
