import { Circle } from "@motion-canvas/2d";

const MyCircle = ({ myCircle }: { myCircle }) => {
  return (
    <Circle ref={myCircle} x={-1000} width={140} height={140} fill="#e13238" />
  );
};

export default MyCircle;
