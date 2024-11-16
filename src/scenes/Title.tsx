import { Line, makeScene2D, Node, Rect, Txt } from "@motion-canvas/2d";
import { all, waitFor } from "@motion-canvas/core";
import { createRef } from "@motion-canvas/core/lib/utils";

export default makeScene2D(function* (view) {
  const title = createRef<Txt>();
  const tip1 = createRef<Txt>();
  const tip2 = createRef<Txt>();
  const tip3 = createRef<Txt>();

  view.add(<Rect fill={"#27262f"} width={view.width} height={view.height} />);
  yield view.add(
    <Txt ref={title} fontSize={50} position={[0, 0]} fill="white" />
  );

  yield* waitFor(0.51);
  yield* title().text("Add detailed Description and Screenshots or Video", 2);
  yield* waitFor(4);
  yield* title().opacity(0, 1);

  yield* waitFor(2);

  view.add(
    <Node position={[20, 0]}>
      <Txt ref={tip1} fontSize={60} position={[-200, -150]} fill="white" />
      <Txt ref={tip2} fontSize={60} position={[-50, 0]} fill="white" />
      <Txt ref={tip3} fontSize={60} position={[-110, 150]} fill="white" />
    </Node>
  );

  yield* tip1().text("1. What the PR does", 2);
  yield* tip2().text("2. Why the change is necessary", 2);
  yield* tip3().text("3. Any potential side effects", 3);

  yield* waitFor(1);
  yield* all(tip1().opacity(0, 2), tip2().opacity(0, 2), tip3().opacity(0, 2));

  const PRBtnText = createRef<Txt>();
  const PRBtn = createRef<Rect>();
  const arrow = createRef<Line>();
  view.add(
    <>
      <Line
        ref={arrow}
        position={[-800, 0]}
        stroke={"#666"}
        lineWidth={8}
        endArrow
        startOffset={() => 20}
        lineDash={[20, 20]}
        lineDashOffset={() => 20}
        endOffset={200}
        end={0}
        radius={480}
        points={[
          [0, 0],
          [480, 480],
          [960, 0],
        ]}
      />
      <Rect
        ref={PRBtn}
        width={350}
        height={100}
        x={70}
        y={80}
        radius={10}
        stroke={"#fcf"}
        lineWidth={2}
      >
        <Txt
          ref={PRBtnText}
          x={0}
          y={0}
          fontSize={26}
          fill={"#fcf"}
          fontFamily={"JetBrains Mono"}
        />
      </Rect>
    </>
  );
  yield* arrow().end(1, 0.6);
  yield* PRBtn().fill("#4a465b", 0.2);
  yield* PRBtnText().text("Try my New Feature", 0.5);

  yield* waitFor(30);
});
