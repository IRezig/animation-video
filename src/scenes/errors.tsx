import { makeScene2D, Rect } from '@motion-canvas/2d';
import { createRef, makeRefs } from '@motion-canvas/core/lib/utils';
import { waitFor, waitUntil } from '@motion-canvas/core/lib/flow';
import warning from '../images/warning.png';
import leadDev from '../images/leadDev.webp';
import { Container } from '../components/Container';
import { Pass } from '../components/Pass';

export default makeScene2D(function* (view) {
  const renderer = createRef<Rect>();
  const pass = makeRefs<typeof Pass>();
  const preview = createRef<Rect>();

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
      <Rect ref={preview} clip></Rect>
    </>
  );

  yield* waitUntil('show_renderer');
  yield* renderer().height(null, 2);
  const clone = pass.value.clone();
  preview().add(clone);
  preview()
    .absolutePosition(pass.value.absolutePosition())
    .size(pass.value.size())
    .radius(clone.radius())
    .fill(clone.fill());
  clone.position(0).size(pass.value.size());
  yield* waitFor(3);
});
