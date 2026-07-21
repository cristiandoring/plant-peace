import styles from "./Footer.module.css";
import utils from "../../styles/utils.module.css";
import LogoLight from "../../assets/svg/LogoLight";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.contentTop} ${utils.container}`}>
        <div className={styles.contentTopLeft}>
          <h1>Seja leve</h1>
          <a href="" className={utils.textUnderline}>
            <span> plantpeace@gmail.com</span>
          </a>
          <a href="" className={utils.textUnderline}>
            <span> +55 (54)99999-9999</span>
          </a>
        </div>
        <div className={styles.contentTopRight}>
          <div className={styles.column}>
            <p>Outras páginas</p>
            <nav>
              <a href="" className={utils.textUnderline}>
                <span>Sobre nós</span>
              </a>
            </nav>
          </div>
          <div className={styles.column}>
            <p>Comunidade</p>
            <nav>
              <a href="" className={utils.textUnderline}>
                <span> Linkedin</span>
              </a>
              <a href="" className={utils.textUnderline}>
                <span>Instagram</span>
              </a>
              <a href="" className={utils.textUnderline}>
                <span> Facebook</span>
              </a>
              <a href="" className={utils.textUnderline}>
                <span>Youtube</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
      <div className={`${styles.contentBottom} ${utils.container}`}>
        <div className={styles.contentBottomLeft}>
          <LogoLight />
          <p>PlantPeace ®. 2026 - Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
