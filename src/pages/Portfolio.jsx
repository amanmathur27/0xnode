import { quotes } from "../assets";
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
          <PortfolioCard projectName="UX" text="https://www.ux.xyz/" />
          <PortfolioCard projectName="Taiko" text="https://taiko.xyz" />
          <PortfolioCard projectName="Penumbra" text="https://penumbra.zone" />
          <PortfolioCard
            projectName="Fairblock"
            text="https://www.fairblock.network"
          />
          <PortfolioCard
            projectName="Farcaster"
            text="https://www.farcaster.xyz"
          />
          <PortfolioCard projectName="Powerloom" text="https://powerloom.io" />
          <PortfolioCard
            projectName="Shardeum"
            text="https://shardeum.org/betanet/"
          />
          <PortfolioCard projectName="Zora" text="https://zora.co" />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;