import styles from './LoadingScreen.module.css';

export default function LoadingScreen() {
  return (
    <div className={styles.loadingContainer}>
      <img src="/assets/logoSmart.svg" alt="Logo" />
      <img src="/assets/loading.gif" alt="Carregando" />
    </div>
  );
}