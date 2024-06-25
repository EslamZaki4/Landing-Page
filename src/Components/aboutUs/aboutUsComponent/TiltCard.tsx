// TiltCard.jsx
import  { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

const ROTATION_RANGE = 40.5;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const TiltCard = ({ image, title, description, backgroundColor, activeTitle }:any) => {

  const ref = useRef<HTMLSpanElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x);
  const ySpring = useSpring(y);
  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e:any) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="relative flex flex-col justify-center items-center gap-3 text-center">
      <motion.span
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transformStyle: "preserve-3d",
          transform,
        }}
        className={`flex justify-center items-center w-[186px] h-[186px] rounded-full shadow-2xl ${backgroundColor}`}
      >
        <img src={image} alt={title} className="h-20 w-20  " />
      </motion.span>
      <div>
      <span className="text-[#F77E23] text-[20px] font-semibold">{activeTitle}</span>
      <span className="text-black text-[20px]">{title}</span>
      </div>
      <p className="text-black text-center text-[16px] w-[90%]">{description}</p>
    </div>
  );
};

export default TiltCard;
