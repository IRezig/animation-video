import { makeScene2D, Node, Rect, Txt } from '@motion-canvas/2d';
import { waitFor } from '@motion-canvas/core';
import { createRef } from '@motion-canvas/core/lib/utils';

export default makeScene2D(function* (view) {
  const title = createRef<Txt>();
  const tip1 = createRef<Txt>();
  const tip2 = createRef<Txt>();
  const tip3 = createRef<Txt>();

  view.add(<Rect fill={'#27262f'} width={view.width} height={view.height} />);
  yield view.add(
    <Txt ref={title} fontSize={50} position={[0, 0]} fill="white" />
  );
  view.add(
    <Node position={[20, 0]}>
      <Txt ref={tip1} fontSize={60} position={[-200, -150]} fill="white" />
      <Txt ref={tip2} fontSize={60} position={[-160, 0]} fill="white" />
      <Txt ref={tip3} fontSize={60} position={[-100, 150]} fill="white" />
    </Node>
  );

  yield* title().text('Write a quality Pull Request', 2);
  yield* title().opacity(0, 2);

  yield* tip1().text('- Clear', 1);
  yield* tip2().text('- Concise', 1);
  yield* tip3().text('- Collaborative', 1);

  yield* waitFor(1);
});
