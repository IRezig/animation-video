import { makeScene2D } from "@motion-canvas/2d";
import { Circle, Rect, Line } from "@motion-canvas/2d/lib/components";
import { createRef, sequence } from "@motion-canvas/core";

export default makeScene2D(function* (view) {
  // References for the girl's body parts
  const head = createRef<Circle>();
  const body = createRef<Rect>();
  const arm = createRef<Line>();

  // Add head
  view.add(
    <Circle ref={head} width={50} height={50} fill="#FFDAB9" x={0} y={-100} />
  );

  // Add body
  view.add(
    <Rect ref={body} width={40} height={100} fill="#ADD8E6" x={0} y={0} />
  );

  // Add waving arm
  view.add(
    <Line
      ref={arm}
      points={[
        [20, -80], // shoulder
        [60, -130], // elbow
      ]}
      lineWidth={8}
      stroke="#FFDAB9"
      endArrow={false}
    />
  );
});
