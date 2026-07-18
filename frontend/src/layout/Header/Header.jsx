import styles from "./Header.module.css";
import Logo from "../../assets/svg/Logo";
import ButtonGreen from "../../components/ButtonGreen/ButtonGreen";
import utils from '../../styles/utils.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <a href="" className={styles.logo}>
        <Logo />
      </a>

      <nav className={styles.menu}>
        <a href="" className={`${styles.linksMenu} ${utils.textUnderline} `}>
          <span>Início</span>
        </a>
        <a href="" className={`${styles.linksMenu} ${utils.textUnderline} `}>
          <span>Produtos</span>
        </a>
        <a href="" className={`${styles.linksMenu} ${utils.textUnderline} `}>
          <span>Sobre nós</span>
        </a>
      </nav>

      <div className={styles.buttons}>
        <a href="" className={`${styles.register} ${utils.textUnderline} `}>
          <span className={styles.textRegister}>Cadastre-se</span>
        </a>
        <ButtonGreen text="Entrar" />
      </div>
    </header>
  );
}
