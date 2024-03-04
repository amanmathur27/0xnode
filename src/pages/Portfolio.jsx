import {
  fairblock,
  farcaster,
  penumbra,
  powerloom,
  quotes,
  shardeum,
  taiko,
  ux,
  zora,
} from "../assets";
import styles from "../style";
import PortfolioCard from "../components/PortfolioCard";

const Portfolio = () => {
  return (
    <section
      className={`${styles.marginX} ${styles.marginY} ${styles.paddingX} bg-primary font-orbitron`}
    >
      <div className="flex flex-col text-center w-full mb-10">
        <div
          className={`flex flex-col gap-4 items-start mb-14 sm:border-r-[1px] sm:border-t-[1px] sm:border-b-[1px]`}
        >
          <h2 className="sm:text-5xl tracking-widest text-4xl font-semibold text-gradient sm:border-b-[1px] sm:border-l-[1px] sm:p-5">
            Portfolio
          </h2>
          <p
            className={`max-w-[850px] text-start sm:pb-10 ${styles.paragraph}`}
          >
            Have a look at some of our ongoing projects
          </p>
        </div>

        <div className="flex flex-wrap -m-4 text-center">
          <PortfolioCard projectName="UX" text="https://www.ux.xyz/" img={ux} />
          <PortfolioCard
            projectName="Taiko"
            text="https://taiko.xyz"
            img={taiko}
          />
          <PortfolioCard
            projectName="Penumbra"
            text="https://penumbra.zone"
            img={penumbra}
          />
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
          <PortfolioCard
            projectName="Powerloom"
            text="https://powerloom.io"
            img={powerloom}
          />
          <PortfolioCard
            projectName="Shardeum"
            text="https://shardeum.org/betanet/"
            img={shardeum}
          />
          <PortfolioCard projectName="Zora" text="https://zora.co" img={zora} />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
