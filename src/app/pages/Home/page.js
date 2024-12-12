"use client"

import { useState } from "react";
import { useRouter } from "next/navigation"; // Corrigido para evitar erro com `next/router`
import Nav from "@/app/components/nav/Nav";
import styles from "./home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faBed,
  faCouch,
  faKitchenSet,
  faLeaf,
  faPlantWilt,
  faTree,
} from "@fortawesome/free-solid-svg-icons";



const PLANT_DATA = {
  Quarto: [
      { id: 1 ,name: "Suculenta", status: "Saudável", backgroundImage: "/assets/plantImage.png" },
  ],
  Sala: [
],
  Cozinha: [
  ],
};
export default function HomePage() {
  const [selectedRoom, setSelectedRoom] = useState("Quarto");
  const router = useRouter();

  const handleCardClick = (plantId) => {
      router.push(`/plants`);
  };
  return (
    <div className={styles.page}>
      <Nav />
      <main className={styles.main}>
        <div className={styles.banners}>
          <div className={styles.banner1}>
            <h2>Aqui você pode Ver e Gerenciar Seus Terrários e Plantas</h2>
            <img src="/assets/imgBanner.svg" alt="imagem de uma pessoa acariciando uma planta" />
          </div>
          <div className={styles.banner2}>
            <img src="/assets/logoName.svg" alt="" width="70%"/>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.filterContainer}>
            <div className={styles.filters}>
              <button
                className={`${styles.filterBtn} ${selectedRoom === "Quarto" ? styles.active : styles.inactive
                  }`}
                onClick={() => setSelectedRoom("Quarto")}
              >
                <div
                  className={`${styles.iconFielde} ${selectedRoom === "Quarto" ? styles.iconFielde : styles.iconInactive
                    }`}
                >
                  <FontAwesomeIcon icon={faBed} />
                </div>
                <h2 className={styles.title}>Quarto</h2>
              </button>
              <button
                className={`${styles.filterBtn} ${selectedRoom === "Sala" ? styles.active : styles.inactive
                  }`}
                onClick={() => setSelectedRoom("Sala")}
              >
                <div className={styles.iconFielde}>
                  <FontAwesomeIcon icon={faCouch} />
                </div>
                <h2 className={styles.title}>Sala</h2>
              </button>
              <button
                className={`${styles.filterBtn} ${selectedRoom === "Cozinha" ? styles.active : styles.inactive
                  }`}
                onClick={() => setSelectedRoom("Cozinha")}
              >
                <div className={styles.iconFielde}>
                  <FontAwesomeIcon icon={faKitchenSet} />
                </div>
                <h2 className={styles.title}>Cozinha</h2>
              </button>
            </div>
            <div className={styles.swiperControl}>
              <button>
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
              <button>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
          <div className={styles.cardContainer}>
          {PLANT_DATA[selectedRoom].map((plant) => (
                <div
                    key={plant.id}
                    className={styles.card}
                    onClick={() => handleCardClick(plant.id)}
                >
                    <div className={styles.cardView}>
                        <div
                            className={styles.plantImage}
                            style={{ backgroundImage: `url(${plant.backgroundImage})` }}
                        ></div>
                        <h1 className={styles.plantName}>{plant.name}</h1>
                    </div>
                    <div className={styles.cardControl}>
                        <div className={styles.situation}>
                            <span>Situação</span>
                            <span>{plant.status}</span>
                        </div>
                        <div className={styles.buttonContainer}>
                            <FontAwesomeIcon icon={faArrowRight}/>
                        </div>
                    </div>
                </div>
            ))}
            <div className={styles.card2} >
                    <div className={styles.cardView}>
                        <div className={styles.iconContainer}>
                          <FontAwesomeIcon icon={faLeaf}/>
                        </div>
                        <h1 className={styles.plantName}>Adicionar Terrário</h1>
                    </div>
                </div>
          </div>
        </div>
      </main>
    </div>
  );
}