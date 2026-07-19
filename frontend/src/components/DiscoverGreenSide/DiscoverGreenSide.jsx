import ButtonGreen from "../ButtonGreen/ButtonGreen";
import ImgBackground from "../ImgBackground/ImgBackground";
import styles from "./DiscoverGreenSide.module.css";

export default function DiscoverGreenSide() {
  return (
    <section className={styles.container} >
      <div className={styles.content}>
        <h1 className={styles.title}>Descubra seu lado verde</h1>
        <p className={styles.description}>
          Somos o seu destino completo para tudo o que é verde e cheio de vida.
          Nosso site oferece uma ampla variedade de plantas deslumbrantes desde
          flores vibrantes a folhagens exuberantes para ambientes internos,
          permitindo que você crie o seu próprio ambiente verde.
        </p>
        <ButtonGreen text="Ver produtos" />
      </div>
      <ImgBackground/>
    </section>
  );
}
