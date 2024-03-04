import Lottie from 'lottie-react';
import animationData from './whiteanim.json';

const LottieMain = () => {

  return (
    <div>
      <Lottie style={{width:'450px'}} animationData={animationData} isplaying={"true"} />
    </div>
  );
};

export default LottieMain;