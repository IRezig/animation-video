import { makeScene2D, Rect, Txt } from '@motion-canvas/2d';
import { createRef, waitFor } from '@motion-canvas/core';

export default makeScene2D(function* (view) {
  const title = createRef<Txt>();
  view.add(<Rect fill={'#27262f'} width={view.width} height={view.height} />);

  view.add(
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

  yield* title().text('Thanks for watching', 2);

  yield* waitFor(5);
});
