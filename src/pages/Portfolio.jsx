import { fairblock, farcaster, penumbra, powerloom, quotes, shardeum, taiko, ux, zora } from "../assets";
import styles from "../style";
import PortfolioCard from "../components/PortfolioCard";

const Portfolio = () => {
  return (
    <section
      className={`${styles.marginX} ${styles.marginY} ${styles.paddingX} bg-primary`}
    >
      <div className="flex flex-col text-center w-full mb-10">
        <div className={`flex gap-4 items-center ${styles.paddingY} border-b-[1px] mb-14 border-b-[#3f3e45]`}>
          <img src={quotes} alt="quote" className="w-[43px] h-[28px]" />
          <h2 className="sm:text-5xl text-4xl font-poppins font-semibold text-gradient">
            Portfolio
          </h2>
        </div>

        <div className="flex flex-wrap -m-4 text-center">
          <PortfolioCard projectName="UX" text="https://www.ux.xyz/" img={ux}/>
          <PortfolioCard projectName="Taiko" text="https://taiko.xyz" img={taiko}/>
          <PortfolioCard projectName="Penumbra" text="https://penumbra.zone" img={penumbra}/>
          <PortfolioCard
            projectName="Fairblock"
            text="https://www.fairblock.network"
            img={fairblock}
          />
          <PortfolioCard
            projectName="Farcaster"
            text="https://www.farcaster.xyz"
            img={farcaster}
          />
          <PortfolioCard projectName="Powerloom" text="https://powerloom.io" img={powerloom}/>
          <PortfolioCard
            projectName="Shardeum"
            text="https://shardeum.org/betanet/"
            img={shardeum}
          />
          <PortfolioCard projectName="Zora" text="https://zora.co" img={zora}/>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;