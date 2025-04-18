
import Lottie from 'lottie-react';
import coderAnimation from '../animation/coder.json';

interface CoderLogoProps {
    className?: string;  // This makes className an optional prop
  }

const CoderLogo: React.FC<CoderLogoProps> = ({className}) => {
    return (
        <div className={`w-64 h-64 mx-auto ${className}`}>
        <Lottie 
          animationData={coderAnimation}
          loop
          autoplay
        />
      </div>
    );
  };
  
  export default CoderLogo;