import DicasSection from '../DicasContainer/DicasSection';
import styles from './RecomendationSection.module.css';

export default function RecommendationSection({ tudoBem, recommendations }) {
  return (
    <div className={styles.recomendacao}>
      <h1>Ações Recomendadas</h1>
      <div className={styles.contentRecomendacao}>
        {tudoBem ? (
          <h1 className={styles.tudoBem}>Tudo está bem com sua planta! 😊</h1>
        ) : (
          recommendations.map(({ title, tips, status }) => (
            <DicasSection key={title} title={title} tips={tips} status={status} />
          ))
        )}
      </div>
    </div>
  );
}