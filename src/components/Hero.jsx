import styles from "../style";
import { robot, discount } from "../assets";
// import { crypto, crypto2 } from "../assets/images";
import GetStarted from "./GetStarted";
import Lotte from "./Lotte/Lotte";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[4px] px-5 bg-discount-gradient rounded-[10px] mb-4">
          <img src={discount} alt="discount" className="w-[34px] h-[34px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">10%</span> Discount On Your First{" "}
            <span className="text-white"> Node</span>  Purchase
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[70px]">
            Introducing <br className="sm:block hidden" />{" "}
            <span className="text-gradient">0xnode</span>{" "}
          </h1>

          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
        <h1 className=" font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
          The Mining Servers
        </h1>
        <p className={`${styles.paragraph} max-w-[480px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia omnis ea
          odio amet. Obcaecati esse quae exercitationem minima tempora corporis
          hic ipsum quod, nulla eligendi.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        {/* <Spline /> */}
        {/* <img src={crypto2} alt="billing" 
        className="w-[100%] h-[100%] relative z-[5]"
        /> */}
        <div className="relative z-[5]"> 
        <Lotte/>
        </div>
        <div className="absolute z-[0] w-[40%] h-[45%] top-0 pink__gradient"/>
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
