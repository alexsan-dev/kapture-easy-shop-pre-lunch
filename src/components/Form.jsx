import React, { useState, useEffect, useRef, useMemo } from "react";
import Modal from "./Modal";
import axios from "axios";
import { header } from "framer-motion/client";

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
  return (
    <>
      <form
        onSubmit={(e) => {
          let email = document.getElementById("email");
          let name = document.getElementById("name");

          e.preventDefault();

          if (name.value.length > 60 || name.value.length < 3) {
            setTheme({
              success: false,
              message:
                "la longueur du nom dois etre comprise entre 3 et 60 characters",
            });
            setAttempt([...attempt, attempt.length + 1]);

            return;
          }
          setLoading(true);
          axios
            .post(
              "https://sandybrown-alligator-504803.hostingersite.com/api/post-email",
              {
                key: import.meta.env.VITE_API_KEY,
                email: email.value,
                name: name.value,
              }
            )
            .then((response) => {
              setTheme({
                success: response.data.success,
                message: response.data.message,
              });
              if (response.data.success) {
                playSound("success");
              } else {
                playSound("wrong");
              }
            })
            .catch((error) => {
              console.log(error);
            })
            .finally(() => {
              setLoading(false);
              setAttempt([...attempt, attempt.length + 1]);
              email.value = "";
              name.value = "";
            });
        }}
        id="form"
        className="w-full FromLeftFadeIn p-2 flex  md:flex-row flex-col items center justify-center gap-5 md:gap-5"
      >
        <input
          id="name"
          placeholder="Nom"
          className="ring-2 focus:outline-5 focus:outline-purple-700/50 placeholder:font-bold placeholder:text-xl placeholder:text-purple-300 ring-purple-700 md:w-2/3 md:p-4 p-2 rounded-full bg-zinc-100"
          type="text"
        />
        <input
          id="email"
          placeholder="Email"
          className="ring-2 focus:outline-5 focus:outline-purple-700/50 placeholder:font-bold placeholder:text-xl placeholder:text-purple-300 ring-purple-700 md:w-2/3 md:p-4 p-2 rounded-full bg-zinc-100"
          type="email"
        />
        {}
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
