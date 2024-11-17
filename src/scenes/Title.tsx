import { Img, Line, makeScene2D, Node, Rect, Txt } from "@motion-canvas/2d";
import { all, waitFor } from "@motion-canvas/core";
import { createRef } from "@motion-canvas/core/lib/utils";
import template1 from "../images/template_1.png";
import template2 from "../images/template_2.png";
import template3 from "../images/template_3.png";
import checkmark from "../images/checkmark.png";
import bad from "../images/bad.png";

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
  yield* waitFor(3);

  yield* all(
    arrow().opacity(0, 0.5),
    PRBtn().opacity(0, 0.5),
    PRBtnText().opacity(0, 0.5)
  );

  const templateImg = createRef<Img>();
  const templateImg2 = createRef<Img>();
  const templateImg3 = createRef<Img>();
  const templateTitle = createRef<Txt>();
  const templateT1 = createRef<Txt>();
  const templateT2 = createRef<Txt>();
  const templateT3 = createRef<Txt>();
  view.add(
    <>
      <Txt fontSize={80} position={[0, -450]} fill="#fcf" ref={templateTitle} />
      <Txt fontSize={40} position={[-500, -370]} fill="#fff" ref={templateT1} />
      <Img
        ref={templateImg}
        src={template1}
        position={[-500, -140]}
        width={800}
        height={400}
      />
      <Txt fontSize={40} position={[400, -370]} fill="#fff" ref={templateT2} />
      <Img
        ref={templateImg2}
        src={template2}
        position={[400, -140]}
        width={800}
        height={400}
      />
      <Txt fontSize={40} position={[-50, 110]} fill="#fff" ref={templateT3} />
      <Img
        ref={templateImg3}
        src={template3}
        position={[0, 340]}
        width={800}
        height={400}
      />
    </>
  );

  yield* templateTitle().text("Templates", 1);
  yield* waitFor(1);
  yield* templateT1().text("Change Documentation Location", 1);
  yield* templateT2().text("New End To End Test", 2);
  yield* templateT3().text("Security Fix", 4);

  yield* waitFor(6);
  yield* all(
    templateImg().opacity(0, 1),
    templateImg2().opacity(0, 1),
    templateImg3().opacity(0, 1),
    templateTitle().opacity(0, 1),
    templateT1().opacity(0, 1),
    templateT2().opacity(0, 1),
    templateT3().opacity(0, 1)
  );

  yield* title().text("");
  yield* title().opacity(1, 0.5);
  yield* title().text("Meaningful Commit Messages", 2);
  yield* title().position.y(-300, 1);

  const goodCommit = createRef<Txt>();
  const badCommit = createRef<Txt>();

  view.add(
    <>
      <Rect
        fill={"#fff"}
        width={840}
        height={100}
        position={[-450, -100]}
        radius={22}
      >
        <Img src={checkmark} width={80} height={80} position={[-370, 0]} />
        <Txt fontSize={40} position={[30, 0]} fill="green" ref={goodCommit} />
      </Rect>
      <Rect
        fill={"#fff"}
        width={400}
        height={100}
        position={[450, -100]}
        radius={22}
      >
        <Img src={bad} width={60} height={60} position={[-140, 0]} />
        <Txt fontSize={40} position={[0, 0]} fill="red" ref={badCommit} />
      </Rect>
    </>
  );

  yield* goodCommit().text("add: debounce function to search input", 1);
  yield* waitFor(1);
  yield* badCommit().text("add: Stuff", 1);

  yield* waitFor(16);
});
