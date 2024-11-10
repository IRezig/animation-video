import { makeScene2D, Rect } from "@motion-canvas/2d";
import { all, createRef } from "@motion-canvas/core";
import MyRect from "./rectangle";

export default makeScene2D(function* (view) {
  const rects = Array.from({ length: 4 }, () => createRef<Rect>());

  rects.forEach((rectRef, i) => {
    view.add(<MyRect myRect={rectRef} text={i.toString()} />);
  });

  yield* all(
    ...rects.map((rectRef, index) =>
      rectRef()
        .position.x(300, 1)
        .to(300 + index * 150, 2)
    )
  );
});
