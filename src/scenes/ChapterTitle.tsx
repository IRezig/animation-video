import { makeScene2D, Node, Ray, Rect, Txt } from '@motion-canvas/2d';
import { waitFor, clamp, createRef } from '@motion-canvas/core';

export default makeScene2D(function* (view) {
  const title = createRef<Txt>();
  const tip1 = createRef<Txt>();
  const tip2 = createRef<Txt>();
  const tip3 = createRef<Txt>();

  view.add(<Rect fill={'#27262f'} width={view.width} height={view.height} />);
  yield view.add(
    // <Txt  fontSize={50} position={[0, 0]} fill="white" />
    <Txt
      ref={title}
      strokeFirst
      lineWidth={10}
      lineJoin={'round'}
      stroke={'#c0a9e0'}
      fill={'#432E54'}
      fontSize={62}
      fontWeight={900}
      fontFamily={'Segoe Print'}
    />
  );
  view.add(
    <Node position={[20, 0]}>
      <Txt ref={tip1} fontSize={60} position={[-200, -150]} fill="white" />
      <Txt ref={tip2} fontSize={60} position={[-160, 0]} fill="white" />
      <Txt ref={tip3} fontSize={60} position={[-100, 150]} fill="white" />
    </Node>
  );

  yield* title().text('How to Write a Quality Pull Request', 3);
  yield* title().opacity(0, 2);
  yield* tip1().text('- Clear', 1);
  yield* tip2().text('- Concise', 1);
  yield* tip3().text('- Collaborative', 1);

  yield* waitFor(1);
});
