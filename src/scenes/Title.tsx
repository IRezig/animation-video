import { makeScene2D, Rect, Txt } from "@motion-canvas/2d";
import { waitFor } from "@motion-canvas/core";
import { createRef } from "@motion-canvas/core/lib/utils";

export default makeScene2D(function* (view) {
  const title = createRef<Txt>();

  view.add(<Rect fill={"#27262f"} width={view.width} height={view.height} />);
  yield view.add(
    <Txt ref={title} fontSize={50} position={[0, 0]} fill="white" />
  );

  yield* waitFor(0.51);
  yield* title().text("Add detailed Description and Screenshots or Video", 2);
  yield* waitFor(4);
});
