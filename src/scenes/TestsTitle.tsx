import { makeScene2D, Circle, Rect, Img } from "@motion-canvas/2d";
import {
  all,
  waitFor,
  easeOutCubic,
  easeInCubic,
  waitUntil,
} from "@motion-canvas/core";
import { createRef } from "@motion-canvas/core/lib/utils";
import checkmark from "../images/checkmark.png";
import CodeLine from "../components/CodeLine";

export default makeScene2D(function* (view) {
  const ref = createRef<Circle>();
  const check = createRef<Img>();

  view.add(<Rect fill={"#27262f"} width={view.width} height={view.height} />);
  view.add(
    <Circle ref={ref} size={160} stroke={"red"} lineWidth={10} endAngle={300} />
  );
  yield view.add(
    <Img
      ref={check}
      src={checkmark}
      width={220}
      position={[20, -20]}
      alpha={0}
    />
  );

  view.add(<CodeLine lineY={-200} />);
  view.add(<CodeLine lineY={0} />);

  yield* all(ref().start(1, 1), ref().rotation(180, 1, easeInCubic));
  ref().start(0).end(0);
  yield* all(ref().end(1, 1), ref().rotation(360, 1, easeOutCubic));
  yield* ref().stroke("#33bc7d", 0.71);
  // yield* slideTransition(Direction.Left, 1);

  yield* all(
    check().size([200, 200], 1).to([250, null], 1),
    check().alpha(1, 1).to(1, 1)
  );
  waitFor(1000);
});

// const arrow = createRef<Line>();
//   view.add(
//     <Line
//       ref={arrow}
//       position={[0, 0]}
//       stroke={"#666"}
//       lineWidth={8}
//       endArrow
//       //   startOffset={() => 20}
//       lineDash={[20, 20]}
//       //   lineDashOffset={() => 20}
//       endOffset={200}
//       end={0}
//       radius={480}
//       points={[
//         [0, 0],
//         [480, 480],
//         [960, 0],
//       ]}
//     />
//   );
