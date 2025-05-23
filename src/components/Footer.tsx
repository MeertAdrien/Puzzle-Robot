import styles from "./Footer.module.css";
function reset() {
  location.reload();
}

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <button onClick={reset} className={styles.reset} type="button">
        <img src="public/refresh.svg" alt="Reset" />
      </button>
    </footer>
  );
};

export default Footer;
