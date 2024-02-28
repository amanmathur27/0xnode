import styles from "../style";

const About = () => {
  return (
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart} mt-20`}>
      <div className={`${styles.boxWidth}`}>
        <div className="md:flex justify-evenly bg-primary shadow-lg shadow-slate-900 md:py-20 rounded-xl items-center mb-20 px-5 py-10">
          <h2 className="text-gradient text-4xl font-poppins sm:text-6xl font-semibold mb-5 border-b-[1px] border-gray-800 pb-6">
            About us
          </h2>
          <p className="text-white font-poppins max-w-[500px]">
            We are proponents of decentralization. We enable blockchains by providing infrastructure support, validating blocks and actively participating in governance. Like uncle Ben said “With great power comes great responsibilities.” Non-custodial staking service Decentralized autonomous organization.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
