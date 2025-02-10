import React, { useState, useEffect, useRef, useMemo } from "react";

import { Icon } from "@iconify/react/dist/iconify.js";
const DropDownList = () => {
  const [state, setState] = useState();
  const [selected, setSelected] = useState(0);
  const datas = [
    {
      id: 1,
      title: "Une plateforme adaptée aux commerçants africains",
      text: "Une solution pensée pour répondre aux besoins et défis spécifiques du marché africain.",
    },
    {
      id: 2,
      title: "Simple, Rapide, Efficace",
      text: "Créez votre boutique en moins de 10 minutes, sans expertise technique requise. 100% adapté sur mobile , idéale pour smartphones et tablettes.",
    },
    {
      id: 3,
      title: "Accompagnement sur mesure",
      text: " Une équipe dédiée pour vous guider à chaque étape. 8 commerçants sur 10 dans notre programme pilote ont exprimé leur satisfaction",
    },
  ];
  useEffect(() => {
    // Logic for fetching data or handling side effects
  }, []);

  return (
    <>
      <div className="my-10 flex flex-col justify-center items-start">
        {datas.map((item) => (
          <React.Fragment key={item.id}>
            <span
              onClick={() => {
                setSelected(selected === item.id ? 0 : item.id);
              }}
              className={`text-xl ${
                item.id === selected
                  ? "scale-y-100"
                  : "border-b-purple-500 border-b-2"
              } transition-all text-left hover:bg-purple-200 cursor-pointer  flex items-center justify-between gap-1 md:gap-5 w-full p-2  font-bold text-purple-500`}
              key={item.id}
            >
              {item.title}
              <Icon
                className={`text-purple-600 duration-500 transition-all ${
                  item.id === selected ? "rotate-[180deg]" : ""
                }`}
                icon="solar:alt-arrow-up-line-duotone"
                height="2.5rem"
              />
            </span>
            <p
              className={`text-purple-500 text-lg w-fit text-start tranistion-all  ${
                item.id === selected ? "scale-y-100" : "scale-y-0"
              }`}
            >
              {item.text}
            </p>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default DropDownList;
