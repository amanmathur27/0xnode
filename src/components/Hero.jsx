import styles from "../style";
import GetStarted from "./GetStarted";
// import Lotte from "./Lottie/LottieMain";
import { Typewriter } from 'react-simple-typewriter'
import LottieMain from "./Lottie/LottieMain";

const Hero = () => {
  return (
    <section
      className={`flex md:flex-row flex-col ${styles.paddingY} font-orbitron`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        {/* <div className="flex flex-row items-center py-[4px] px-5 bg-discount-gradient rounded-[10px] mb-4">
          <img src={discount} alt="discount" className="w-[34px] h-[34px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">10%</span> Discount On Your First{" "}
            <span className="text-white"> Node</span>  Purchase
          </p>
        </div> */}

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[70px] sm:tracking-widest">
            Introducing <br className="sm:block hidden" />{" "}
            <span className="text-gradient text ss:text-[82px] text-[62px] sm:tracking-widest">0xfork</span>{" "}
          </h1>

          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
        <h1 className="font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full sm:tracking-widest">
        <Typewriter
            words={['Decentralized', 'Autonomous', 'Organization']}
            loop={Infinity}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
        
        <p className={`${styles.paragraph} max-w-[680px] mt-5`}>
        We are proponents of decentralization. We enable blockchains by providing infrastructure support, validating blocks and actively participating in governance.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        {/* <img src={crypto2} alt="billing" 
        className="w-[100%] h-[100%] relative z-[5]"
        /> */}
        <div className="relative z-[5]"> 
        {/* <Lotte/> */}
        <LottieMain/>
        </div>
        <div className="absolute z-[0] w-[40%] h-[45%] top-0 white__gradient"/>
        {/* <div className="absolute z-[1] w-[70%] h-[70%] rounded-full bottom-40 white__gradient"/> */}
        <div className="absolute z-[1] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"/>
        
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
