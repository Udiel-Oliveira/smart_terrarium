import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import styles from '../../plants/plants.module.css';

/**
 * Componente que renderiza uma lista de dicas com ícones 
 * @param {Object} props - Propriedades do componente
 * @param {string} props.status - Status das dicas (Crítico ou Moderado)
 * @param {Array} props.criticalTips - Lista de dicas críticas
 * @param {Array} props.moderateTips - Lista de dicas moderadas
 */
const TipList = ({ status, criticalTips, moderateTips }) => {
  const iconClass = status === 'Crítico' ? styles.icon : styles.iconMode;
  const tips = status === 'Crítico' ? criticalTips : moderateTips;

  return (
    <>
      {tips.map((tip, index) => (
        <div key={`tip-${index}`} className={styles.tips}>
          <div className={iconClass}>
            <FontAwesomeIcon icon={faCircleExclamation} />
          </div>
          <p>{tip}</p>
        </div>
      ))}
    </>
  );
};

export default TipList;