"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

import { supabase } from "@/lib/supabaseClient";
import { IoCloseSharp } from "react-icons/io5";
import Button from "./Button";

const SubscribeForm = ({ onClose }) => {
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onChange",
  });
  const errorStyle = "mb-2 text-sm text-red-600";

  const onSubmit = async (data) => {
    try {
      setSuccess(false);

      if (!supabase) {
        setError("root", {
          message: "Mangler Supabase-konfiguration.",
        });
        return;
      }

      const subscriber = {
        subscriber_firstname: data.Fname,
        subscriber_lastname: data.Lname,
        subscriber_mail: data.email,
        subscriber_postnumber: data.postalCode,
      };

      const { error } = await supabase.from("subscribers").insert([subscriber]);

      if (error) {
        if (error.code === "23505") {
          setError("root", {
            message: "Denne email er allerede tilmeldt vores nyhedsbrev.",
          });
          return;
        }
        throw error;
      }

      setSuccess(true);
      reset();
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    } catch (error) {
      setError("root", {
        message:
          error instanceof Error
            ? error.message
            : "Der skete en fejl. Prøv igen senere.",
      });
      console.error("Error submitting form:", error);
    }
  };

  //   rendering of form
  return (
    <div className="fixed inset-0 z-50 h-dvh w-dvw items-center justify-center md:flex md:p-4">
      <div className="border-gray-300 bg-white p-9.25 md:max-h-125 md:max-w-300 md:border">
        <div className="mb-6 flex items-center justify-between">
          <h1>Nyhedsbrev</h1>
          <button
            type="button"
            onClick={() => onClose && onClose()}
            aria-label="Luk"
          >
            <IoCloseSharp size={25} />
          </button>
        </div>
        <p>
          Få nyt fra vores fællesskaber på Kulturværftet og i Toldkammeret hver
          fredag.
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-6 md:grid md:grid-cols-2 md:gap-4"
        >
          <div>
            {errors.Fname && (
              <p className={errorStyle}>{errors.Fname.message}</p>
            )}
            <input
              {...register("Fname", {
                required: "Fornavn er påkrævet",
              })}
              type="text"
              name="Fname"
              id="Fname"
              placeholder="Indtast dit fornavn"
              className="mb-4 w-full border border-gray-300 p-2"
            />
          </div>
          <div>
            {errors.Lname && (
              <p className={errorStyle}>{errors.Lname.message}</p>
            )}
            <input
              {...register("Lname", {
                required: "Efternavn er påkrævet",
              })}
              type="text"
              name="Lname"
              id="Lname"
              placeholder="Indtast dit efternavn"
              className="mb-4 w-full border border-gray-300 p-2"
            />
          </div>
          <div>
            {errors.email && (
              <p className={errorStyle}>{errors.email.message}</p>
            )}
            <input
              {...register("email", {
                required: "Email er påkrævet",
                validate: (value) =>
                  /\S+@\S+\.\S+/.test(value) || "Indtast en gyldig email",
              })}
              type="email"
              name="email"
              id="email"
              placeholder="Indtast din email"
              className="mb-4 w-full border border-gray-300 p-2"
            />
          </div>
          <div>
            {errors.postalCode && (
              <p className={errorStyle}>{errors.postalCode.message}</p>
            )}
            <input
              {...register("postalCode", {
                required: "Postnummer er påkrævet",
              })}
              type="text"
              name="postalCode"
              id="postalCode"
              placeholder="Indtast dit postnummer"
              className="mb-4 w-full border border-gray-300 p-2"
            />
          </div>
          <div>
            {errors.root && <p className={errorStyle}>{errors.root.message}</p>}
            {success && (
              <p className="mt-4 text-sm text-green-600">
                Tilmelding modtaget.
              </p>
            )}
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Tilmelder..." : "Tilmeld"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubscribeForm;
