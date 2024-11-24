import { Line, makeScene2D, Node, Rect, Txt } from '@motion-canvas/2d';
import { all, waitFor } from '@motion-canvas/core';
import { createRef } from '@motion-canvas/core';

export default makeScene2D(function* (view) {
  const title = createRef<Txt>();
  const feature = createRef<Txt>();
  const featureA = createRef<Txt>();
  const featureB = createRef<Txt>();
  const featureC = createRef<Txt>();
  const featureRect = createRef<Line>();
  const rect1 = createRef<Line>();
  const rect2 = createRef<Line>();
  const rect3 = createRef<Line>();
  const rectHeight = 100;
  const rectWidth = 206;

  //BG
  view.add(<Rect fill={'#27262f'} width={view.width} height={view.height} />);
  yield view.add(
    <Txt
      ref={title}
      strokeFirst
      lineWidth={10}
      lineJoin={'round'}
      stroke={'#c0a9e0'}
      fill={'#432E54'}
      fontFamily={'Segoe Print'}
      fontSize={62}
      fontWeight={900}
      position={[0, 0]}
    />
  );

  yield* title().text('Keep it small and focus', 2);
  yield* title().opacity(0, 1);

  yield view.add(
    <Txt ref={title} fontSize={50} position={[0, 0]} fill="white" />
  );

  view.add(
    <Line
      opacity={1}
      radius={20}
      ref={featureRect}
      stroke="#fff"
      lineWidth={8}
      y={-300}
      closed
      points={[
        [-600, 100],
        [600, 100],
        [600, -100],
        [-600, -100],
      ]}
    >
      <Node>
        <Line
          opacity={0}
          stroke="A594F9"
          fill="432E54"
          radius={20}
          closed
          x={-420}
          y={0}
          ref={rect1}
          lineWidth={8}
          points={[
            [-rectWidth, rectHeight],
            [rectWidth, rectHeight],
            [rectWidth, -rectHeight],
            [-rectWidth, -rectHeight],
          ]}
        >
          <Txt fontSize={25} position={[0, 0]} fill="white" ref={featureA} />
        </Line>
        <Line
          opacity={0}
          closed
          stroke="A594F9"
          fill="432E54"
          radius={20}
          x={0}
          y={0}
          lineWidth={8}
          ref={rect2}
          points={[
            [-rectWidth, rectHeight],
            [rectWidth, rectHeight],
            [rectWidth, -rectHeight],
            [-rectWidth, -rectHeight],
          ]}
        >
          <Txt fontSize={25} position={[0, 0]} fill="white" ref={featureB} />
        </Line>
        <Line
          closed
          opacity={0}
          stroke="A594F9"
          fill="432E54"
          radius={20}
          lineWidth={8}
          points={[
            [-rectWidth, rectHeight],
            [rectWidth, rectHeight],
            [rectWidth, -rectHeight],
            [-rectWidth, -rectHeight],
          ]}
          x={420}
          y={0}
          ref={rect3}
        >
          <Txt fontSize={25} position={[0, 0]} fill="white" ref={featureC} />
        </Line>
      </Node>
      <Txt fontSize={80} position={[0, 0]} fill="white" ref={feature} />
    </Line>
  );

  yield* feature().text('Add Login System', 1);
  yield* all(
    rect1().opacity(1, 2),
    rect2().opacity(1, 2),
    rect3().opacity(1, 1),
    rect1().position.x(-600, 4),
    rect1().position.y(400, 4),
    rect3().position.x(600, 4),
    rect3().position.y(400, 4),
    rect2().position.y(400, 4)
  );
  yield* all(
    featureA().text('User Interface', 2),
    featureB().text('Authentication Logic', 2),
    featureC().text('Security and Session Management', 2)
  );

  yield* waitFor(2);
});
