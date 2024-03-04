import Lottie from 'lottie-react';
import animationData from './aboutanim.json';

const LottieAbout = () => {

  return (
    <div>
      <Lottie style={{width:'450px'}} animationData={animationData} isplaying={"true"} />
    </div>
  );
};

export default LottieAbout;