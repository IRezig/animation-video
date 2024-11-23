import { makeScene2D, Circle, Rect, Img, Txt, Node } from '@motion-canvas/2d';
import {
  all,
  waitFor,
  easeOutCubic,
  easeInCubic,
  waitUntil,
} from '@motion-canvas/core';
import { createRef, createRefMap } from '@motion-canvas/core/lib/utils';
import checkmark from '../images/checkmark.png';
import CodeLine from '../components/codeLines/CodeLine';
import CodeLine2 from '../components/codeLines/CodeLine2';
import black from '../images/black.png';
import prettier from '../images/prettier.png';

export default makeScene2D(function* (view) {
  const check = createRefMap<Img>();
  const ref = createRefMap<Circle>();
  const title = createRef<Txt>();
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

  yield* waitFor(0.51);
  yield* title().text('Code is Well-Formatted and Tested', 2);
  yield* waitFor(2);
  yield* title().opacity(0, 1);
  const nd = createRef<Node>();

  view.add(
    <Node ref={nd}>
      <Img
        src={black}
        width={800}
        height={400}
        position={[-400, 0]}
        stroke={'red'}
        lineWidth={10}
        radius={20}
      />
      <Img
        src={prettier}
        width={800}
        height={400}
        position={[500, 0]}
        stroke={'red'}
        lineWidth={10}
        radius={20}
      />
    </Node>
  );

  yield* waitFor(2);
  yield* nd().opacity(0, 1);

  yield view.add(
    <>
      <>
        <Circle
          ref={ref.a}
          size={60}
          stroke={'red'}
          lineWidth={10}
          endAngle={300}
          position={[-700, -200]}
        />
        <Img
          ref={check.a}
          src={checkmark}
          height={50}
          position={[-695, -206]}
          alpha={0}
        />
        <CodeLine lineY={-200} />
      </>
      <>
        <Circle
          ref={ref.b}
          size={60}
          stroke={'red'}
          lineWidth={10}
          endAngle={300}
          position={[-700, -100]}
        />
        <Img
          ref={check.b}
          src={checkmark}
          height={50}
          position={[-695, -106]}
          alpha={0}
        />
        <CodeLine2 lineY={-100} />
      </>
      <>
        <Circle
          ref={ref.c}
          size={60}
          stroke={'red'}
          lineWidth={10}
          endAngle={300}
          position={[-700, -0]}
        />
        <Img
          ref={check.c}
          src={checkmark}
          height={50}
          position={[-695, -6]}
          alpha={0}
        />
        <CodeLine lineY={0} />
      </>
      <>
        <Circle
          ref={ref.d}
          size={60}
          stroke={'red'}
          lineWidth={10}
          endAngle={300}
          position={[-700, 100]}
        />
        <Img
          ref={check.d}
          src={checkmark}
          height={50}
          position={[-695, 95]}
          alpha={0}
        />
        <CodeLine2 lineY={100} />
      </>
    </>
  );

  yield* all(
    ref.a().start(1, 1),
    ref.a().rotation(180, 1, easeInCubic),
    ref.b().start(1, 1),
    ref.b().rotation(180, 1, easeInCubic),
    ref.c().start(1, 1),
    ref.c().rotation(180, 1, easeInCubic),
    ref.d().start(1, 1),
    ref.d().rotation(180, 1, easeInCubic)
  );
  ref.a().start(0).end(0);
  ref.b().start(0).end(0);
  ref.c().start(0).end(0);
  ref.d().start(0).end(0);
  yield* all(
    ref.a().end(1, 1),
    ref.a().rotation(360, 1, easeOutCubic),
    ref.a().stroke('#33bc7d', 0.2),
    check.a().size([50, 50], 1).to([80, null], 1),
    check.a().alpha(0, 1).to(1, 1)
  );
  yield* all(ref.b().end(1, 1), ref.b().rotation(360, 1, easeOutCubic));
  yield* all(ref.c().end(1, 1), ref.c().rotation(360, 1, easeOutCubic));
  yield* all(ref.d().end(1, 1), ref.d().rotation(360, 1, easeOutCubic));
  yield* ref.b().stroke('#33bc7d', 0.2);
  yield* ref.c().stroke('#33bc7d', 0.2);
  yield* ref.d().stroke('#33bc7d', 0.2);

  // yield* slideTransition(Direction.Left, 1);

  yield* all(
    check.b().size([50, 50], 1).to([80, null], 1),
    check.b().alpha(0, 1).to(1, 1),
    check.c().size([50, 50], 1).to([80, null], 1),
    check.c().alpha(0, 1).to(1, 1),
    check.d().size([50, 50], 1).to([80, null], 1),
    check.d().alpha(0, 1).to(1, 1)
  );
  yield* waitFor(2);
});
