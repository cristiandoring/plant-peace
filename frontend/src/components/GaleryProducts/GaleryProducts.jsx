import React, { useRef, useState } from "react";
import CardProduct from "../../components/CardProduct/CardProduct";
import plant from "../../assets/img/plant.jpg";
import ArrowLeft from "../../assets/svg/ArrowLeft";
import ArrowRight from "../../assets/svg/ArrowRight";
import styles from "./GaleryProduct.module.css";

export default function GaleryProducts() {
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleButtonClick = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

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
          <button
            type="button"
            onClick={() => handleButtonClick("left")}
            className={styles.iconButton}
            aria-label="Anterior"
          >
            <ArrowLeft />
          </button>
          <button
            type="button"
            onClick={() => handleButtonClick("right")}
            className={styles.iconButton}
            aria-label="Próximo"
          >
            <ArrowRight />
          </button>
        </div>
      </div>

      <div
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseUpOrLeave}
        onMouseUp={handleMouseUpOrLeave}
        onMouseMove={handleMouseMove}
        className={`${styles.listProducts} ${isDragging ? styles.dragging : ""}`}
      >
        <div className={styles.cardItem}>
          <CardProduct urlImg={plant} name="Nome de teste" price="15.41" />
        </div>
        <div className={styles.cardItem}>
          <CardProduct urlImg={plant} name="Nome de teste" price="15.41" />
        </div>
        <div className={styles.cardItem}>
          <CardProduct urlImg={plant} name="Nome de teste" price="15.41" />
        </div>
        <div className={styles.cardItem}>
          <CardProduct urlImg={plant} name="Nome de teste" price="15.41" />
        </div>
        <div className={styles.cardItem}>
          <CardProduct urlImg={plant} name="Nome de teste" price="15.41" />
        </div>
        <div className={styles.cardItem}>
          <CardProduct urlImg={plant} name="Nome de teste" price="15.41" />
        </div>
        <div className={styles.cardItem}>
          <CardProduct urlImg={plant} name="Nome de teste" price="15.41" />
        </div>
        <div className={styles.cardItem}>
          <CardProduct urlImg={plant} name="Nome de teste" price="15.41" />
        </div>
      </div>
    </section>
  );
}