import DiscoverGreenSide from "../components/DiscoverGreenSide/DiscoverGreenSide";
import Header from "../layout/Header/Header";
import CardCare from "../components/CardCare/CardCare";
import Water from "../assets/svg/Water";
import Sun from "../assets/svg/Sun";
import Fertilizant from "../assets/svg/Fertilizant";
import styles from "./Home.module.css";
import utils from "../styles/utils.module.css";
import plantsLeft from "../assets/img/plantsLeft.png";
import plantsRight from "../assets/img/plantsRight.png";
import garden from "../assets/img/garden.png";
import ButtonGreen from "../components/ButtonGreen/ButtonGreen";
import Footer from "../layout/Footer/Footer";

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

        <section className={styles.variantPlants}>
          <div className={styles.variantContentLeft}>
            <img src={plantsLeft} alt="" />
            <img src={plantsRight} alt="" />
          </div>
          <div className={styles.variantContentRight}>
            <img src={garden} alt="" className={styles.garden} />
            <div className={styles.boxDescription}>
              <p className={styles.descriptionVariant}>
                Nosso site oferece uma grande variedade de plantas
                deslumbrantes, de flores vibrantes a folhagens exuberantes para
                ambientes internos, permitindo que você crie seu próprio oásis
                verde. Além da nossa ampla seleção de plantas, também
                disponibilizamos kits de jardinagem e fertilizantes, fornecendo
                tudo o que você precisa para cuidar bem das suas plantas e obter
                sucesso no cultivo.
              </p>
              <p className={styles.descriptionVariant}>
                Mas não paramos por aí! Acreditamos que o conhecimento é a chave
                para um jardim próspero; por isso, oferecemos uma vasta gama de
                informações e recursos sobre técnicas de jardinagem, dicas de
                cuidados com as plantas e ideias de paisagismo. Seja você um
                jardineiro experiente ou alguém que está apenas começando sua
                jornada verde, nosso objetivo é inspirar e apoiar você em cada
                etapa do caminho. Prepare-se para explorar nosso jardim virtual
                e descobrir conosco o prazer de cultivar plantas!
              </p>
            </div>
            <ButtonGreen text="Ver mais fotos" />
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
