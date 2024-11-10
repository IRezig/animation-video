import { Circle, Code, Rect } from "@motion-canvas/2d";

const WIDTH = 700;
const HEIGHT = 800;
const C_SIZE = 25;
const C_Y = -400;
const C_X = -WIDTH + 380;

const fileColor = "#2b2844";
const topBarColor = "#49475e";
const MyCode = () => {
  return (
    <Rect
      width={WIDTH}
      height={HEIGHT}
      fill={fileColor}
      x={-500}
      y={0}
      stroke="#fff"
      radius={10}
    >
      <Rect
        width={WIDTH}
        height={50}
        fill={topBarColor}
        x={0}
        y={C_Y}
        radius={10}
      />
      <Circle width={C_SIZE} height={C_SIZE} fill="red" x={C_X} y={C_Y} />
      <Circle
        width={C_SIZE}
        height={C_SIZE}
        fill="green"
        x={C_X + 40}
        y={C_Y}
      />
      <Circle
        width={C_SIZE}
        height={C_SIZE}
        fill="yellow"
        x={C_X + 80}
        y={C_Y}
      />
      <Code
        x={-100}
        y={0}
        fontSize={28}
        code={`\
        function example() {
          const number = 7;
        }
        `}
      />
    </Rect>
  );
};
export default MyCode;
