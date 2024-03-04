import LottieAbout from "../components/Lottie/LottieAbout";
import styles from "../style";

const Temp = () => {
  return (
    <div
      className={`bg-primary ${styles.paddingX} ${styles.flexStart} font-orbitron text-snow`}
    >
      <div
        className={`${styles.boxWidth} flex md:flex-row flex-col ${styles.paddingY} ${styles.flexCenter} mt-10 sm:mt-0 gap-10`}
      >
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center sm:border-r-[1px] sm:border-t-[1px] sm:border-b-[1px]">
          <h1 className="text-gradient font-bold sm:text-5xl text-3xl mb-10 sm:border-b-[1px] sm:border-l-[1px] sm:p-5">
            About 0xFork
          </h1>
          <p className={`leading-loose max-w-[850px] sm:text-xl text-lg sm:pb-10 ${styles.paragraph}`}>
            We are proponents of decentralization. We enable blockchains by
            providing infrastructure support, validating blocks and actively
            participating in governance. Like uncle Ben said “With great power
            comes great responsibilities.” Non-custodial staking service
            <span className="text-ghostWhite font-semibold"> Decentralized autonomous organization.</span>
          </p>
        </div>

        <div>
          <LottieAbout />
        </div>
      </div>
    </div>
  );
};

export default Temp;
