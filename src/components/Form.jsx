import React, { useState, useEffect, useRef, useMemo } from "react";
import Modal from "./Modal";
import axios from "axios";

import { useForm } from "react-hook-form";
import { infinity } from "ldrs";
infinity.register();
const Form = ({ setTheme, theme, setAttempt, attempt }) => {
  const [sound, setsound] = useState({
    success: "/notif.mp3",
    wrong: "/wrong.mp3",
  });
  const [loading, setLoading] = useState(false);
  const playSound = (soundType) => {
    const audio = new Audio(sound[soundType]);
    audio.play();
  };

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    resetField,
    clearErrors,
    getValues,
    watch,
    formState: { errors, isValid ,submitCount},
  } = useForm();
  const onSubmit = async (data) => {
    setLoading(true);
    axios
      .post(
        "https://initiativeafrica2030.org/api/post-email",
        { ...data, key: 'zWZ{"GS}4kPyba.T=h>q' },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          withCredentials: true, // Important si l’authentification est requise
        }
      )
      .then((response) => {
        SetErrorModal(response.data.message, response.data.success);
      })
      .catch((error) => {
        SetErrorModal(error.response.data.message, error.response.data.success);
      })
      .finally(() => {
        setLoading(false);
        setAttempt([...attempt, attempt.length + 1]);
      });
  };

  const SetErrorModal = (type, situation) => {
    setTheme({
      success: situation,
      message: type,
    });

    if (situation) {
      playSound("success");
    } else {
      playSound("wrong");
    }
  };

  useEffect(() => {
    
    if (!isValid || ["name", "phone", "email"].includes(errors)) {
      setAttempt([...attempt, attempt.length + 1]);
      if (errors.name) {
        console.log(errors.name)
        setTheme({
          success: false,
          message: errors.name.message,
        });
      }
      if (errors.email) {
        setTheme({
          success: false,
          message: errors.email.message,
        });
      }
      if (errors.phone) {
        setTheme({
          success: false,
          message: errors.phone.message,
        });
      }
     
    }
  }, [isValid,errors,submitCount]);

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        id="form"
        className="w-full FromLeftFadeIn p-2 flex md:grid grid-cols-4 flex-col items center justify-center gap-5 "
      >
        <input
          {...register("phone", { required: "Le téléphone est requis" })}
          placeholder="Téléphone"
          className="ring-2 col-span-2 col-start-1 w-full focus:outline-5 focus:outline-purple-700/50 placeholder:font-bold placeholder:text-xl placeholder:text-purple-300 ring-purple-700 md:p-4 p-2.5 rounded-full bg-zinc-100"
          type="text"
        />

        {/* Champ Email */}
        <input
          {...register("email", {
            required: "L'email est requise",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Format d'email invalide",
            },
          })}
          placeholder="Email"
          className="ring-2 col-span-2 col-start-3 w-full focus:outline-5 focus:outline-purple-700/50 placeholder:font-bold placeholder:text-xl placeholder:text-purple-300 ring-purple-700 md:p-4 p-2.5 rounded-full bg-zinc-100"
          type="email"
        />

        {/* Champ Nom */}
        <input
          {...register("name", {
            required: "Le nom est requis",
            minLength: {
              value: 4,
              message: "Le nom doit contenir au moins 4 caractères",
            },
            maxLength: {
              value: 60,
              message: "Le nom ne peut pas dépasser 60 caractères",
            },
          })}
          placeholder="Nom"
          className="ring-2 col-span-3 col-start-1 w-full focus:outline-5 focus:outline-purple-700/50 placeholder:font-bold placeholder:text-xl placeholder:text-purple-300 ring-purple-700 md:p-4 p-2.5 rounded-full bg-zinc-100"
          type="text"
        />
        <button className="bg-purple-700 whitespace-nowrap p-2 md:p-4 rounded-full font-bold text-purple-300 text-lg cursor-pointer hover:brightness-150 active:brightness-75">
          {loading ? (
            <l-infinity
              size="55"
              stroke="4"
              stroke-length="0.15"
              bg-opacity="0.1"
              speed="1.3"
              color="white"
            ></l-infinity>
          ) : (
            "ME PRE-INCRIRE"
          )}
        </button>
      </form>
    </>
  );
};

export default Form;
