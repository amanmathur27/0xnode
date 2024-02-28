import Lottie from 'lottie-react';
import animationData from './redanim.json';

const Lotte = () => {

  return (
    <div>
      <Lottie style={{width:'450px'}} animationData={animationData} isplaying={"true"} />
    </div>
  );
};

export default Lotte;