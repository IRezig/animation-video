import { Img, makeScene2D, Rect } from '@motion-canvas/2d';
import { Direction, slideTransition, waitFor } from '@motion-canvas/core';
import { createRef, makeRef, makeRefs } from '@motion-canvas/core/lib/utils';
import { all, delay, waitUntil } from '@motion-canvas/core/lib/flow';
import warning from '../images/warning.png';
import previous from '../images/previous.png';
import leadDev from '../images/leadDev.webp';
import { easeInOutCubic, easeOutCubic } from '@motion-canvas/core/lib/tweening';
import { Vector2 } from '@motion-canvas/core/lib/types';
import { Container } from '../components/Container';
import { Pass } from '../components/Pass';

export default makeScene2D(function* (view) {
  const renderer = createRef<Rect>();
  const pass = makeRefs<typeof Pass>();
  const preview = createRef<Rect>();
  const video = createRef<Img>();

  view.add(
    <Rect layout fill={'#141414'} height={'100%'} width={'100%'}></Rect>
  );

  yield view.add(
    <>
      <Rect ref={renderer} layout clip height={0}>
        <Container label="Lead dev has reviewed you code" src={leadDev}>
          <Pass
            name="Consider using more descriptive variable names"
            src={warning}
          />
          <Pass
            refs={pass}
            name="This function is too long; breaking it into smaller functions would improve clarity"
            src={warning}
          />
          <Pass
            name="Does this edge case handle inputs like null or empty values?"
            src={warning}
          />
          <Pass
            name="Integration tests should cover this feature"
            src={warning}
          />
          <Pass
            name="This logic seems repeated in several places.
            Can it be abstracted into a helper function?"
            src={warning}
          />
          <Pass
            name="Add comments or documentation to explain this complex logic."
            src={warning}
          />
          <Pass
            name="This logic seems repeated in several places.
            Can it be abstracted into a helper function?"
            src={warning}
          />
        </Container>
      </Rect>
      <Rect ref={preview} clip>
        <Img
          ref={video}
          y={200}
          opacity={0}
          src={previous}
          width={1920 - 160}
          // time={196.7}
        />
      </Rect>
    </>
  );
  // yield* slideTransition(Direction.Left, 1);

  yield* waitUntil('show_renderer');
  yield* renderer().height(null, 6);
  const clone = pass.value.clone();
  preview().add(clone);
  preview()
    .absolutePosition(pass.value.absolutePosition())
    .size(pass.value.size())
    .radius(clone.radius())
    .fill(clone.fill());
  clone.position(0).size(pass.value.size());

  yield* waitUntil('show_previous');
  yield* all(
    preview().size(
      [1920 - 160, 1080 - 160],
      0.6,
      easeInOutCubic,
      Vector2.arcLerp
    ),
    preview().position(0, 0.6),
    preview().fill('#141414', 0.6),
    clone.opacity(0, 0.3),
    delay(
      0.3,
      all(video().opacity(1, 0.3), video().position.y(0, 0.3, easeOutCubic))
    )
  );
  clone.remove();
  renderer().remove();
  waitFor(1000);
});
