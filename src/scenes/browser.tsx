import { Circle, Code, Rect, Txt } from "@motion-canvas/2d";

const WIDTH = 700;
const HEIGHT = 800;
const C_SIZE = 25;
const C_Y = -400;
const C_X = -WIDTH + 380;

const fileColor = "#ecec";
const topBarColor = "#49475e";
const Browser = () => {
  return (
    <Rect
      width={WIDTH}
      height={HEIGHT}
      fill={fileColor}
      x={500}
      y={0}
      stroke="#fff"
      radius={10}
    >
      {/* top bar */}
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
      {/* content */}
      <Txt
        x={0}
        y={-300}
        fontSize={28}
        text={"New Feature"}
        fontFamily={"JetBrains Mono"}
      />
      <Txt
        x={0}
        y={-250}
        fontSize={20}
        text={"A new feature has been added to the browser"}
        fontFamily={"JetBrains Mono"}
      />
      <Rect width={400} height={50} fill="#fff" x={0} y={200} radius={10}>
        <Txt
          x={0}
          y={0}
          fontSize={20}
          text={"Click here to learn more"}
          fontFamily={"JetBrains Mono"}
        />
      </Rect>
    </Rect>
  );
};
export default Browser;
