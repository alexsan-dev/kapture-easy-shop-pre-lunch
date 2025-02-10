import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import DropDownList from "./components/DropDownList";
import { Icon } from "@iconify/react/dist/iconify.js";
import { testimonials } from "./components/Testimonials";
import Modal from "./components/Modal";

import Aos from "aos";

import CountdownTimer from "./components/CountdownTimer";
AOS.init();
function App() {
  const [attempt, setAttempt] = useState([]);
  const [theme, setTheme] = useState({
    success: null,
    message: "Problème de connexion ... réessayer",
  });
  return (
    <>
      {theme.success !==null && attempt.map((item, index) => (
        <React.Fragment key={index}>
          <Modal isSuccess={theme.success} message={theme.message} />
        </React.Fragment>
      ))}
      <section
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='160' height='160' patternTransform='scale(3) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='oklch(0.902 0.063 306.703)'/><path d='M121.5 39.5V9.169c0-2.827 1.724-4.707 3.473-5.602l.707-.362c2.086-1.068 4.702-.631 6.359 1.026l1.985 1.985c1.349 1.349 3.235 2.018 5.14 2.128 12.336 0 12.336-18.505 0-18.505M40.75 39.499V9.17c0-2.827-1.724-4.707-3.473-5.602l-.707-.362c-2.086-1.068-4.702-.631-6.359 1.026l-1.985 1.985c-1.349 1.349-3.236 2.018-5.14 2.128-12.336 0-12.336-18.505 0-18.505m146.575 111.248c0-12.337-18.505-12.337-18.505 0 .11 1.904.78 3.79 2.128 5.139l1.985 1.985c1.657 1.657 2.094 4.273 1.026 6.36l-.362.706c-.895 1.75-2.775 3.474-5.602 3.474l-30.33-.001m49.66-63.086c0 12.336-18.505 12.336-18.505 0 .11-1.904.78-3.791 2.128-5.14l1.985-1.985c1.657-1.657 2.094-4.273 1.026-6.359l-.362-.707c-.895-1.749-2.775-3.474-5.602-3.473h-30.33m19.162 130.344c12.337 0 12.337-18.505 0-18.505-1.631 0-3.99.98-5.139 2.128l-1.985 1.985c-1.656 1.656-4.274 2.094-6.36 1.027l-.706-.362c-2.086-1.069-3.474-3.258-3.474-5.602v-34.302l.001-26.228c0-2.344-1.427-4.458-3.473-5.602l-.707-.361a5.83 5.83 0 00-6.36 1.026l-1.984 1.985c-1.144 1.152-3.508 2.128-5.14 2.128-12.336 0-12.336-18.505 0-18.505 1.904.11 3.715.86 5.14 2.128l1.985 1.985a5.812 5.812 0 006.359 1.026l.707-.362c1.287-1.485 3.473-2.775 3.473-5.602v-30.33M23.086 168.343c-12.336 0-12.336-18.505 0-18.505 1.632 0 3.992.98 5.14 2.128l1.985 1.985c1.656 1.656 4.274 2.094 6.359 1.027l.707-.362c2.086-1.069 3.474-3.258 3.474-5.602l-.001-34.302V88.485c0-2.344 1.387-4.533 3.473-5.602l.707-.361c2.085-1.068 4.703-.63 6.359 1.026l1.985 1.985c1.148 1.148 3.508 2.128 5.14 2.128 12.336 0 12.336-18.505 0-18.505-1.905.11-3.791.78-5.14 2.128l-1.985 1.985c-1.657 1.657-4.273 2.094-6.36 1.026l-.706-.362c-1.75-.895-3.474-2.775-3.474-5.602v-30.33m80.75 80.749H91.17c-2.827 0-4.707 1.724-5.602 3.473l-.362.707c-1.068 2.086-.631 4.702 1.026 6.359l1.985 1.985c1.349 1.349 2.018 3.236 2.128 5.14 0 12.336-18.505 12.336-18.505 0 0-1.632.98-3.992 2.128-5.14l1.985-1.985c1.656-1.656 2.094-4.274 1.026-6.359l-.361-.707c-1.069-2.086-3.258-3.474-5.602-3.473h-60.53c-2.344 0-4.533-1.387-5.602-3.473l-.362-.707c-1.067-2.085-.63-4.703 1.027-6.359l1.985-1.985c1.148-1.148 2.128-3.508 2.128-5.14 0-12.336-18.505-12.336-18.505 0M121.5 38H91.169c-2.827 0-4.707-1.724-5.602-3.473l-.362-.707c-1.068-2.086-.631-4.702 1.026-6.359l1.985-1.985c1.349-1.349 2.018-3.235 2.128-5.14C90.344 8 71.84 8 71.84 20.337c0 1.632.977 3.994 2.128 5.14.663.66 1.343 1.305 1.985 1.985 1.608 1.703 2.003 4.23 1.026 6.36-.11.24-.233.474-.361.706C75.48 36.577 73.359 38 71.015 38H36.712L10.485 38c-2.344 0-4.533 1.387-5.602 3.473-.12.236-.24.471-.362.707-1.067 2.085-.63 4.703 1.027 6.36l1.985 1.984c1.148 1.148 2.128 3.508 2.128 5.14C9.66 68-8.844 68-8.844 55.664'  stroke-width='0.5' stroke='oklch(0.627 0.265 303.9)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(-627,0)' fill='url(%23a)'/></svg>\")",
        }}
        className="w-full  relative min-h-screen flex justify-between items-center"
      >
        <div className="md:w-fit m-4 md:m-0 w-full FromTopFadeIn z-10  flex flex-col items-start justify-start h-max p-10 rounded-md backdrop-blur right-[30dvw] md:absolute bg-white/50">
          <h1 className="text-3xl md:whitespace-nowrap font-bold mb-5 md:w-2/3 text-purple-700">
            Lancez Votre Boutique en Ligne avec Kapture EasyShop
          </h1>
          <h2 className="flex items-center text-2xl mb-[10dvh] justify-center gap-2 text-purple-500">
            <div className="w-[10px]   h-[10px] rounded-full animate-ping bg-purple-500 aspect-square"></div>{" "}
            +500 petites entreprises envisagent déjà de nous rejoindre !
          </h2>
          <Form
            setTheme={setTheme}
            theme={theme}
            setAttempt={setAttempt}
            attempt={attempt}
          ></Form>
        </div>
        <div className="h-[80dvh] md:flex hidden w-1/4 items-start justify-start">
          <img className="h-[5rem]" src="/logo.svg" alt="dashboard-img" />
        </div>

        <img
          className="FromRightFadeIn md:block hidden h-[70dvh] mr-32"
          src="/dashboard.png"
          alt="dashboard-img"
        />
      </section>
      <section
        data-aos="fade-up"
        className="w-full h-fit my-20 text-center p-4"
      >
        <h2 className="text-2xl font-bold text-purple-700">
          La solution e-commerce conçue pour les commerçants africains.
        </h2>

        <p className="text-center md:px-40 mt-5 text-purple-500 text-lg">
          Vous êtes commerçant, restaurateur, artisan ou propriétaire d'un
          commerce de détail ? Vous voulez étendre votre activité en ligne,
          attirer davantage de clients et augmenter vos ventes ?
          <span className="font-bold bg-purple-100">
            {" "}
            Kapture EasyShop est la solution qu’il vous faut.
          </span>
        </p>
        <div className="w-full mt-20 gap-10 md:gap-0 px-20 flex flex-col md:flex-row items-center justify-evenly">
          <div
            data-aos="fade-up"
            className="md:w-1/3  flex flex-col justify-center items-center"
          >
            <Icon
              className="text-purple-500"
              icon="solar:cup-bold-duotone"
              height="5rem"
            />
            <p className=" text-center text-lg text-purple-700 break-words md:w-1/2">
              Augmenter votre visibilité et attirer plus de clients, où qu’ils
              soient.
            </p>
          </div>
          <div
            data-aos="fade-up"
            className="md:w-1/3  flex flex-col justify-center items-center"
          >
            <Icon
              className="text-purple-500"
              icon="solar:graph-new-up-line-duotone"
              height="5rem"
            />
            <p className=" text-center text-lg text-purple-700 break-words md:w-1/2">
              Optimiser vos ventes avec des outils marketing performants adaptés
              à vos besoins
            </p>
          </div>
          <div
            data-aos="fade-up"
            className="md:w-1/3  flex flex-col justify-center items-center"
          >
            <Icon
              className="text-purple-500"
              icon="solar:stars-minimalistic-bold"
              height="5rem"
            />
            <p className=" text-center text-lg text-purple-700 break-words md:w-1/2">
              Simplifier la gestion de votre activité grâce à un tableau de bord
              intuitif
            </p>
          </div>
        </div>
      </section>
      <div className="w-full flex justify-between items-centerh-[2px]">
        <div className=" h-[1px]"></div>
        <div className="w-2/3 h-[1px] bg-purple-500"></div>
        <div className=" h-[1px]"></div>
      </div>
      <section
        data-aos="fade-up"
        className="w-full flex-col flex items-center justify-around"
      >
        <div className="flex p-4 w-full ">
          <img
            className="w-1/2 h-[60dvh] md:block hidden"
            src="/illustration.svg"
            alt="illustration-image"
          />
          <div className="md:w-1/2 w-full  flex flex-col items-center justify-evenly">
            <h2 className="text-2xl my-5 md:my-0 font-bold text-purple-700">
              Une Offre Spéciale pour nos Premiers Inscrits !
            </h2>
            <div className=" flex w-full flex-col justify-center items-start gap-10">
              <span className="flex justify-center items-center gap-5">
                <Icon
                  className="text-purple-500"
                  icon="solar:hand-money-line-duotone"
                  height="2.5rem"
                />
                <span className="font-bold break-words text-lg text-purple-700">
                  -40% sur toutes nos offres payantes (places limitées).
                </span>
              </span>
              <span className="flex justify-center items-center gap-5">
                <Icon
                  className="text-purple-500"
                  icon="solar:chat-dots-linear"
                  height="2.5rem"
                />
                <span className="font-bold break-words text-lg text-purple-700">
                  Accès anticipé à l'application et à des contenus exclusifs sur
                  le commerce en ligne.{" "}
                </span>
              </span>
              <span className="flex justify-center items-center gap-5">
                <Icon
                  className="text-purple-500"
                  icon="solar:chart-bold-duotone"
                  height="2.5rem"
                />
                <span className="font-bold text-lg text-purple-700">
                  Outils marketing adaptés: jeux-concours, codes promo, et bien
                  plus pour booster vos ventes !
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="w-full my-10 flex items-center justify-center ">
          <button
            onClick={() => {
              const element = document.getElementById("form");
              element.scrollIntoView(true);
              // Scroll to the element with smooth behavior and specific alignment
              element.scrollIntoView({
                behavior: "smooth",
                block: "end",
                inline: "nearest",
              });
            }}
            className="p-4 cursor-pointer hover:brightness-110 active:brightness-75 shadow-current/50  text-purple-700 font-bold shadow-md rounded-full bg-purple-300 "
          >
            🚀 Rejoignez l’aventure dès aujourd’hui !
          </button>
        </div>
      </section>
      <section
        data-aos="fade-up"
        className="flex p-4 md:p-0 flex-col justify-center items-center"
      >
        <h2 className="text-2xl font-bold text-purple-700">
          Pourquoi choisir Kapture EasyShop ?
        </h2>
        <DropDownList />
        <h2 className="text-2xl font-bold text-purple-700">
          Les Fonctionnalités qui Propulsent Votre Activité
        </h2>
      </section>
      <section
        data-aos="fade-up"
        className="md:h-[50dvh] relative gap-10 grid w-full p-10 md:grid-cols-3 my-10 bg-purple-300"
      >
        <Icon
          className="absolute text-purple-700 animate-bounce top-0 left-2"
          icon="solar:rocket-2-line-duotone"
          height="5rem"
        />
        <div className="border-2 border-purple-700 bg-white rounded-lg p-4">
          <h3 className="text-lg font-bold text-purple-700">
            Boostez vos ventes avec nos outils marketing
          </h3>
          <li className="text-purple-500 italic mt-10">
            Offrez des codes promo et lancez des jeux-concours pour générer +30%
            d'engagement client.
          </li>
          <li className="text-purple-500 italic mt-10">
            Attirez des clients fidèles grâce à des offres personnalisées et des
            publications automatiques vers vos réseaux sociaux.
          </li>
        </div>
        <div className="border-2 border-purple-700 bg-white rounded-lg p-4">
          <h3 className="text-lg font-bold text-purple-700">
            Gérez vos livraisons en toute simplicité
          </h3>

          <li className="text-purple-500 italic mt-10">
            20 partenariats locaux avec des sociétés de livraison partout en
            Afrique pour vous garantir des livraisons fiables et économiques.
          </li>
        </div>
        <div className="border-2 border-purple-700 bg-white rounded-lg p-4">
          <h3 className="text-lg font-bold text-purple-700">
            Surveillez vos performances en temps réel
          </h3>
          <li className="text-purple-500 italic mt-10">Suivi des ventes.</li>
          <li className="text-purple-500 italic mt-10">
            Nombre de clics sur vos produits
          </li>
          <li className="text-purple-500 italic mt-10">
            Analyse du taux de conversion
          </li>
        </div>
      </section>
      <div className="md:m-10 w-full flex items-center justify-center">
        <h2 className="text-2xl font-bold text-purple-700">
          Ils Nous Font Confiance
        </h2>
      </div>

      <section
        data-aos="fade-up"
        className="h-fit relative gap-10 grid w-full p-10 md:grid-cols-3 my-10 "
      >
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-md mx-auto my-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              className="w-full h-56 object-cover rounded-t-lg"
              src={item.photo}
              alt={item.title}
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-purple-700 mb-4">
                {item.title}
              </h2>
              <p className="text-lg text-purple-500 italic">{item.text}</p>
            </div>
          </div>
        ))}
      </section>
      <div className="w-full my-10 flex items-center justify-center ">
        <button
          onClick={() => {
            const element = document.getElementById("form");
            element.scrollIntoView(true);
            // Scroll to the element with smooth behavior and specific alignment
            element.scrollIntoView({
              behavior: "smooth",
              block: "end",
              inline: "nearest",
            });
          }}
          className="p-4 cursor-pointer hover:brightness-110 active:brightness-75 shadow-current/50  text-purple-700 font-bold shadow-md rounded-full bg-purple-300 "
        >
          Me pre-incrire
        </button>
      </div>
      <div className="md:my-10 text-center w-full flex items-center justify-center">
        <h2 className="text-2xl font-bold text-purple-700">
          Suivez-nous sur les Réseaux Sociaux
        </h2>
      </div>
      <section
        data-aos="fade-up"
        className="flex justify-center items-center gap-6 p-6"
      >
        {/* Icon Instagram */}
        <a
          href="https://www.tiktok.com/@kaptureeasyshopp?_t=ZM-8tJkUcL2P2c&_r=1"
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 bg-purple-400 rounded-full flex justify-center items-center hover:scale-110 transition-transform"
        >
          <Icon icon="fa6-brands:tiktok" className="text-purple-100 text-3xl" />
        </a>

        {/* Icon LinkedIn */}
        <a
          href="https://www.linkedin.com/company/kaptureeasyshop/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 bg-purple-400 rounded-full flex justify-center items-center hover:scale-110 transition-transform"
        >
          <Icon icon="mdi:linkedin" className="text-purple-100 text-3xl" />
        </a>

        {/* Icon Facebook */}
        <a
          href="https://www.facebook.com/groups/9192311950834997/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 bg-purple-400 rounded-full flex justify-center items-center hover:scale-110 transition-transform"
        >
          <Icon icon="mdi:facebook" className="text-purple-100 text-3xl" />
        </a>
      </section>
      <footer className="bg-purple-100 border-purple-700 text-center py-4 mt-8 border-t">
        <p className="text-purple-600 text-sm">Kapture Easy Shop © 2025</p>
      </footer>
      <CountdownTimer />
    </>
  );
}

export default App;
