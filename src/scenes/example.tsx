import { makeScene2D, Rect } from "@motion-canvas/2d";
import { all, createRef } from "@motion-canvas/core";
import MyRect from "./rectangle";
import MyCode from "./code";
import Browser from "./browser";

export default makeScene2D(function* (view) {
  view.add(
    <Rect
      width={"100%"}
      height={"100%"}
      fill="#ADD8E6" // Light blue background color
      x={0}
      y={0}
    />
  );
  const rects = Array.from({ length: 4 }, () => createRef<Rect>());

  view.add(<MyCode />);
  view.add(<Browser />);
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
