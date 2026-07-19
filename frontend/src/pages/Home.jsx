import DiscoverGreenSide from "../components/DiscoverGreenSide/DiscoverGreenSide";
import Header from "../layout/Header/Header";
import CardCare from "../components/CardCare/CardCare";
import Water from "../assets/svg/Water";
import Sun from "../assets/svg/Sun";
import Fertilizant from "../assets/svg/Fertilizant";
import styles from "./Home.module.css";
import utils from "../styles/utils.module.css";

export default function Home() {
  return (
    <>
      <Header />

      <main className={utils.container}>
        <DiscoverGreenSide />

        <section className={styles.stepsCare}>
          <div className={styles.contentTop}>
            <h1 className={styles.title}>
              Passos para cuidar das suas plantas
            </h1>
            <p className={styles.description}>
              Ao seguir estes três passos — rega adequada, exposição apropriada
              à luz solar e fornecimento de nutrientes essenciais — você estará
              no caminho certo para manter plantas saudáveis ​​e vigorosas.
            </p>
          </div>
          <div className={styles.steps}>
            <CardCare
              icon={<Water />}
              title="Hidratação"
              description="Regue suas plantas quando a camada superficial do solo estiver seca ao toque. Evite o excesso de água, pois isso pode levar 
        à desidratação das raízes"
            />
            <CardCare
              icon={<Sun />}
              title="Luz solar"
              description="A maioria das plantas precisa de luz solar adequada para se desenvolver bem. Coloque suas plantas em locais que recebam a quantidade de luz apropriada para as suas necessidades específicas
"
            />
            <CardCare
              icon={<Fertilizant />}
              title="Fertilização"
              description="Escolha um fertilizante adequado com base nas necessidades específicas das suas plantas, seja uma fórmula balanceada ou especializada"
            />
          </div>
        </section>
      </main>
    </>
  );
}
