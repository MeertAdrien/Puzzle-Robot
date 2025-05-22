import styles from "./Header.module.css";

export const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Puzzle Robot</h1>
            <img 
                className={styles.image} 
                src="src/assets/un_robot_entrain_de_faire_du_code_sur_un_pc.png" 
                alt="Robot" 
            />
        </header>
    );
};

export default Header;