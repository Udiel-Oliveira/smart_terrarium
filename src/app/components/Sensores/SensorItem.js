import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-regular-svg-icons';
import styles from "./SensorItem.module.css"
/**
 * Componente de círculo de sensor que exibe um valor e pode ser estilizado dinamicamente
 * @param {Object} props - Propriedades do componente
 * @param {string} props.value - Valor a ser exibido no círculo
 * @param {string} props.label - Rótulo do sensor
 * @param {string} props.borderColor - Cor da borda do círculo
 * @param {number} props.borderPercentage - Percentual da borda
 */
const SensorCircle = ({ value, label, borderColor, borderPercentage, icon }) => {
  return (
    <div className={styles.sensorItem}>
      <div className={styles.icone} style={{
      backgroundColor:`${borderColor}`,
    }}>
        <FontAwesomeIcon icon={icon} />
      </div>
      <span className={styles.sensorLabel}>{label}</span>
      <div
        className={styles.sensorCircle}
        style={{
          borderColor: borderColor,
          borderWidth: `${borderPercentage}%`
        }}
      >
        <span className={styles.sensorValue}>{value}</span>
      </div>

    </div>
  );
};

export default SensorCircle;