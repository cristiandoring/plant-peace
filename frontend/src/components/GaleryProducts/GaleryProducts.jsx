import CardProduct from "../../components/CardProduct/CardProduct";
import plant from "../../assets/img/plant.jpg";
import ArrowLeft from "../../assets/svg/ArrowLeft";
import ArrowRight from "../../assets/svg/ArrowRight";
import styles from "./GaleryProduct.module.css";

export default function GaleryProducts() {
  return (
    <section className={styles.carousel}>
      <div className={styles.carouselContent}>
        <div className={styles.carouselContentLeft}>
          <h1 className={styles.carouselContentLeftTitle}>
            Os mais populares e mais vendidos desta semana
          </h1>
          <p className={styles.carouselContentLeftDescription}>
            Navegue pela nossa galeria para ver os produtos em destaque da nossa
            loja.
          </p>
        </div>
        <div className={styles.buttonsCarousel}>
          <ArrowLeft />
          <ArrowRight />
        </div>
      </div>
      <div className={styles.listProducts}>
        <CardProduct urlImg={plant} name="Nome de teste" price="15.41" />
        <CardProduct urlImg={plant} name="Nome de teste" price="15.41" />
        <CardProduct urlImg={plant} name="Nome de teste" price="15.41" />
        <CardProduct urlImg={plant} name="Nome de teste" price="15.41" />
        <CardProduct urlImg={plant} name="Nome de teste" price="15.41" />

      </div>
    </section>
  );
}
