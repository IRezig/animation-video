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
} from '@motion-canvas/2d';
import { createRef } from '@motion-canvas/core';
import { Direction } from '@motion-canvas/core/lib/types';
import { slideTransition } from '@motion-canvas/core/lib/transitions';
import { waitFor, waitUntil } from '@motion-canvas/core/lib/flow';
import { parser } from '@lezer/javascript';
import { Style } from './Code';

const WIDTH = 700;
const HEIGHT = 800;
const C_SIZE = 25;
const C_Y = -400;
const C_X = -WIDTH + 380;

const fileColor = '#ecec';
const topBarColor = '#49475e';
Code.defaultHighlighter = new LezerHighlighter(parser, Style);
export default makeScene2D(function* (view) {
  const code = createRef<Code>();
  const navigator = createRef<Rect>();
  const btn = createRef<Rect>();
  const IDE = createRef<Rect>();
  const btnLabel = createRef<Txt>();

  const PRNew = createRef<Txt>();
  const PRTitle = createRef<Txt>();
  const PRTitleRect = createRef<Rect>();
  const PRTitleText = createRef<Txt>();
  const PRDesc = createRef<Txt>();
  const PRDescRect = createRef<Rect>();
  const PRDescText = createRef<Txt>();
  const PRCodeRect = createRef<Rect>();
  const PRCodeText = createRef<Txt>();
  const PRBtn = createRef<Rect>();
  const PRBtnText = createRef<Txt>();
  const PRCode = createRef<Txt>();
  const titleLabel = createRef<Txt>();
  const descLabel = createRef<Txt>();

  view.add(
    <Rect layout fill={'#141414'} height={'100%'} width={'100%'}></Rect>
  );

  yield view.add(
    <Rect
      ref={navigator}
      width={WIDTH}
      height={HEIGHT}
      fill={fileColor}
      x={500}
      y={0}
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
        ref={PRNew}
        x={-150}
        y={-300}
        fontSize={28}
        fill={'green'}
        fontFamily={'JetBrains Mono'}
      />
      <Txt
        ref={PRTitle}
        x={-290}
        y={-200}
        fontSize={20}
        fontFamily={'JetBrains Mono'}
      />
      <Rect
        ref={PRTitleRect}
        width={300}
        height={50}
        fill="ececec"
        x={800}
        y={-200}
        radius={10}
      >
        <Txt
          ref={PRTitleText}
          x={0}
          y={0}
          fontSize={20}
          fontFamily={'JetBrains Mono'}
        />
      </Rect>
      <Txt
        ref={PRDesc}
        x={-250}
        y={-100}
        fontSize={20}
        fontFamily={'JetBrains Mono'}
      />
      <Rect
        ref={PRDescRect}
        width={300}
        height={50}
        fill="ececec"
        x={700}
        y={-100}
        radius={10}
      >
        <Txt
          ref={PRDescText}
          x={0}
          y={0}
          fontSize={20}
          fontFamily={'JetBrains Mono'}
        />
      </Rect>
      <Txt
        ref={PRCode}
        x={-300}
        y={-20}
        fontSize={20}
        fontFamily={'JetBrains Mono'}
      />
      <Rect
        ref={PRCodeRect}
        width={400}
        height={200}
        fill="ececec"
        x={700}
        y={70}
        radius={10}
      >
        <Txt
          ref={PRCodeText}
          x={0}
          y={0}
          fontSize={20}
          fontFamily={'JetBrains Mono'}
        />
      </Rect>
      <Rect ref={PRBtn} width={350} height={50} x={50} y={300} radius={10}>
        <Txt
          ref={PRBtnText}
          x={0}
          y={0}
          fontSize={20}
          fontFamily={'JetBrains Mono'}
        />
      </Rect>

      <Txt
        ref={titleLabel}
        x={0}
        y={-250}
        fontSize={38}
        fontFamily={'Delius'}
      />
      <Txt ref={descLabel} x={0} y={-150} fontSize={30} fontFamily={'Delius'} />
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
          ref={btnLabel}
          x={0}
          y={0}
          fontSize={20}
          text={'Click Here'}
          fontFamily={'Delius'}
        />
      </Rect>
    </Rect>
  );

  yield view.add(
    <>
      <Rect
        ref={IDE}
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
          fontFamily={'JetBrains Mono'}
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
  yield* waitUntil('signal');
  yield* code().selection(lines(5), 0.5);
  yield* waitFor(0.3);

  yield* code().selection(lines(9), 0.5);
  yield* titleLabel().text('New Feature', 0.3);
  yield* waitFor(0.3);

  yield* code().selection(lines(10, 12), 0.5);
  yield* descLabel().text('A new feature has been added ', 0.3);
  yield* waitFor(0.3);

  yield* code().selection(lines(13, 15), 0.5);
  yield* btn().fill('blue', 0.9);
  yield* waitFor(1);

  yield* code().selection(lines(0, 20), 0.5);
  yield* titleLabel().text('', 0.1);
  yield* descLabel().text('', 0.1);
  yield* btn().fill('#fff', 0.1);
  yield* btnLabel().text('', 0.1);
  yield* navigator().fill('#fff', 0.3);

  yield* waitFor(3);

  yield* PRNew().text('New Pull Request', 0.3);
  yield* PRTitle().text('Title', 0.3);
  yield* PRTitleRect().x(0, 0.3);
  yield* PRTitleText().text('New Feature', 0.3);
  yield* PRDesc().text('Description', 0.3);
  yield* PRDescRect().x(0, 0.3);
  yield* PRDescText().text('Nothing', 0.3);
  yield* PRCode().text('Code', 0.3);
  yield* PRCodeRect().x(50, 0.3);
  yield* PRCodeText().text(`code here`, 0.3);
  yield* PRBtnText().text('Create a new Pull Request', 0.3);
  yield* PRBtn().fill('blue', 0.2);
  yield* waitFor(3);
});
