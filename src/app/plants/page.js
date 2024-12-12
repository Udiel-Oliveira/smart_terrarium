"use client"

import { useState, useEffect } from 'react';
import Nav from '../components/nav/Nav';
import SensorCircle from '../components/Sensores/SensorItem';
import TipList from '../components/DicasContainer/DicasSection';
import styles from './plants.module.css';
import { faSun, faTemperature0, faWater } from '@fortawesome/free-solid-svg-icons';

export default function PlantDetails() {
  // Estado para armazenar os dados da planta
  const [plantData, setPlantData] = useState(null);

  // Função para buscar dados da planta
  
  useEffect(() => {
    async function fetchPlantData() {
      try {
        const response = await fetch("https://pjct-iot-api.onrender.com/data");
        if (!response.ok) {
          throw new Error(`Erro ao buscar dados da planta: ${response.statusText}`);
        }
        const data = await response.json();
        setPlantData(data.find((item) => item.id === 1));
      } catch (error) {
        console.error("Erro ao buscar dados da planta:", error);
      }
    }
    fetchPlantData();
  }, []);

  // Estado de carregamento
  if (!plantData) {
    return (
      <div className={styles.loadingContainer}>
        <img src="/assets/logoSmart.svg" alt="" />
        <img src="/assets/loading.gif" alt="" />
      </div>
    );
  }

  // Funções de estilização e determinação de status
  const getTemperatureStyles = (temperature) => {
    if (temperature > 30 || temperature < 25) {
      return { borderColor: "red", borderPercentage: 100 };
    }
    return {
      borderColor: "green",
      borderPercentage: ((temperature - 25) / 5) * 100
    };
  };

  const getHumidityStyles = (humidity) => {
    if (humidity < 40) {
      return { borderColor: "red", borderPercentage: 100};
    }
    if (humidity >= 40 && humidity <= 60) {
      return {
        borderColor: "green",
        borderPercentage: ((humidity - 40) / 20) * 100
      };
    }
    return { borderColor: "yellow", borderPercentage: 100  };
  };

  const getIlluminationStyles = (illumination) => {
    if (illumination < 29) {
      return { borderColor: "red", borderPercentage: 100 };
    }
    if (illumination >= 30 && illumination <= 50) {
      return {
        borderColor: "green",
        borderPercentage: ((illumination - 200) / 600) * 100
      };
    }
    return { borderColor: "red", borderPercentage: 100 };
  };

  // Dicas de sensor
  const getCriticalTips = (sensor) => {
    const tips = {
      temperature: [
        "Verifique se a planta não está exposta à luz direta intensa.",
        "Considere usar ventilação ou ar-condicionado para reduzir a temperatura."
      ],
      humidity: [
        "Aumente a umidade ao redor da planta com um umidificador.",
        "Use um prato com pedras e água para aumentar a umidade."
      ],
      illumination: [
        "Se a planta não está recebendo luz suficiente, mova-a para um local mais iluminado.",
        "Use uma lâmpada de crescimento para complementar a iluminação."
      ]
    };
    return tips[sensor] || [];
  };

  const getModerateTips = (sensor) => {
    const tips = {
      temperature: [
        "Considere mover a planta para um local onde a temperatura esteja mais estável.",
        "Evite que a planta seja exposta a mudanças rápidas de temperatura."
      ],
      humidity: [
        "Regule a umidade com um umidificador para manter os níveis ideais.",
        "A planta pode precisar de mais espaço para respirar."
      ],
      illumination: [
        "Certifique-se de que a planta esteja recebendo luz indireta suficiente.",
        "Mova a planta para uma área com luz filtrada se a luz direta for muito forte."
      ]
    };
    return tips[sensor] || [];
  };

  // Verificação de status geral da planta
  const tudoBem =
    plantData.temperature >= 20 && plantData.temperature <= 30 &&
    plantData.soil_moisture >= 40 && plantData.soil_moisture <= 60 &&
    plantData.illumination >= 20 && plantData.illumination <= 80;

  const tempStatus = plantData.temperature > 30 || plantData.temperature < 25 ? "Crítico" : "Moderado";
  const humidityStatus = plantData.soil_moisture < 40 || plantData.soil_moisture > 60 ? "Crítico" : "Moderado";
  const illuminationStatus = plantData.illumination < 80 || plantData.illumination > 100 ? "Crítico" : "Moderado";

  // Estilos dos sensores
  const tempStyles = getTemperatureStyles(plantData.temperature);
  const soilMoistureStyles = getHumidityStyles(plantData.soil_moisture);
  const illuminationStyles = getIlluminationStyles(plantData.illumination);

  return (
    <div className={styles.container}>
      <Nav />
      <main className={styles.main}>
        <div className={styles.name}>
          <h1 className={styles.plantName}>Suculenta</h1>
          <span className={styles.statusText}>Saudavel</span>
        </div>
        <div className={styles.content}>
          <div className={styles.item1}>
            <div className={styles.plantImage}></div>
            <div className={styles.infoPlant}>
              <div className={styles.infoTitle}>
                <h1>Informações</h1>
                <span className={styles.furo}></span>
              </div>
              <p>
                As suculentas são plantas fascinantes, conhecidas por sua capacidade
                de armazenar água em suas folhas, caules ou raízes, o que lhes
                permite sobreviver em condições de seca.
              </p>
            </div>
          </div>

          <div className={styles.item2}>
            {/* Contêiner de sensores */}
            <div className={styles.sensorContainer}>
              <SensorCircle
                value={`${plantData.soil_moisture}%`}
                label="Umidade do Solo"
                color={soilMoistureStyles.color}
                bgColor={soilMoistureStyles.backgroundColor}
                borderColor={soilMoistureStyles.borderColor}
                borderPercentage={soilMoistureStyles.borderPercentage}
                icon={faWater}
              />
              <SensorCircle
                value={`${plantData.temperature}°C`}
                label="Temperatura"
                borderColor={tempStyles.borderColor}
                borderPercentage={tempStyles.borderPercentage}
                icon={faTemperature0}
              />
              <SensorCircle
                value={`${plantData.illumination}%`}
                label="Iluminação"
                borderColor={illuminationStyles.borderColor}
                borderPercentage={illuminationStyles.borderPercentage}
                icon={faSun}
              />
            </div>

            {/* Seção de recomendações */}
            <div className={styles.recomendacao}>
              <h1>Ações Recomendadas</h1>
              <div className={styles.contentRecomendacao}>
                {tudoBem ? (
                  <h1 className={styles.tudoBem}>Tudo está bem com sua planta! 😊</h1>
                ) : (
                  <>
                    <h2>Temperatura</h2>
                    <TipList
                      status={tempStatus}
                      criticalTips={getCriticalTips("temperature")}
                      moderateTips={getModerateTips("temperature")}
                    />

                    <h2>Umidade</h2>
                    <TipList
                      status={humidityStatus}
                      criticalTips={getCriticalTips("humidity")}
                      moderateTips={getModerateTips("humidity")}
                    />

                    <h2>Iluminação</h2>
                    <TipList
                      status={illuminationStatus}
                      criticalTips={getCriticalTips("illumination")}
                      moderateTips={getModerateTips("illumination")}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}