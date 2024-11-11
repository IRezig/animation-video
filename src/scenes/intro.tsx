import {
  Circle,
  Code,
  Line,
  makeScene2D,
  Node,
  lines,
  word,
  Rect,
  Txt,
  LezerHighlighter,
} from "@motion-canvas/2d";
import { all, createRef } from "@motion-canvas/core";
import { Direction, Vector2 } from "@motion-canvas/core/lib/types";
import { slideTransition } from "@motion-canvas/core/lib/transitions";

import { createSignal } from "@motion-canvas/core/lib/signals";
import { waitFor, waitUntil } from "@motion-canvas/core/lib/flow";
import { parser } from "@lezer/javascript";
import { Style } from "./Code";
import Browser from "./Browser";

const WIDTH = 700;
const HEIGHT = 800;
const C_SIZE = 25;
const C_Y = -400;
const C_X = -WIDTH + 380;

const fileColor = "#ecec";
const topBarColor = "#49475e";
Code.defaultHighlighter = new LezerHighlighter(parser, Style);
export default makeScene2D(function* (view) {
  const code = createRef<Code>();
  const btn = createRef<Rect>();
  const titleLabel = createRef<Txt>();
  const descLabel = createRef<Txt>();

  view.add(
    <Rect layout fill={"#141414"} height={"100%"} width={"100%"}></Rect>
  );

  yield view.add(
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
        ref={titleLabel}
        x={0}
        y={-250}
        fontSize={38}
        fontFamily={"Delius"}
      />
      <Txt ref={descLabel} x={0} y={-150} fontSize={30} fontFamily={"Delius"} />
      <Rect
        ref={btn}
        width={200}
        height={50}
        fill="#ececec"
        x={0}
        y={200}
        radius={10}
      >
        <Txt
          x={0}
          y={0}
          fontSize={20}
          text={"Click Here"}
          fontFamily={"Delius"}
        />
      </Rect>
    </Rect>
  );

  yield view.add(
    <>
      <Rect
        offset={-1}
        x={-960 + 80}
        y={-540 + 80}
        height={1080 - 160}
        width={960}
        clip
      >
        <Code
          selection={[
            [
              [0, 0],
              [8, 100],
            ],
          ]}
          ref={code}
          fontSize={24}
          lineHeight={36}
          offsetX={-1}
          x={-960 / 2}
          fontFamily={"JetBrains Mono"}
          code={`
import { Card, Typography, Button } from 'antd';

const { Title, Paragraph } = Typography;

const NewFeature = () => {

  return (
    <Card style={{ width: 300, textAlign: 'center' }}>
      <Title level={3}>New Feature</Title>
      <Paragraph>
        A new feature has been added to the browser
      </Paragraph>
      <Button type="primary" onClick={handleClick}>
        Click Here
      </Button>
    </Card>
  );
};

export default NewFeature;
`}
        />
      </Rect>
    </>
  );

  yield* slideTransition(Direction.Bottom, 1);
  yield* waitUntil("signal");
  yield* code().selection(lines(5), 0.5);
  yield* waitFor(0.3);

  yield* code().selection(lines(9), 0.5);
  yield* titleLabel().text("New Feature", 0.3);
  yield* waitFor(0.3);

  yield* code().selection(lines(10, 12), 0.5);
  yield* descLabel().text("A new feature has been added ", 0.3);
  yield* waitFor(0.3);

  yield* code().selection(lines(13, 15), 0.5);
  yield* btn().fill("blue", 0.9);
  yield* waitFor(1);
});
