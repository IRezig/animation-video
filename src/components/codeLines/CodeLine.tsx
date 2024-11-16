import { Line } from "@motion-canvas/2d";

const CodeLine = ({ lineY }: { lineY: number }) => {
  const littleLinePoints = [
    [-20, 10],
    [100, 10],
    [100, -10],
    [-20, -10],
  ];

  const bigLinePoints = [
    [-200, 10],
    [240, 10],
    [240, -10],
    [-200, -10],
  ];
  return (
    <>
      <Line
        position={[-600, lineY]}
        points={littleLinePoints}
        fill="white"
        lineWidth={8}
        closed
        radius={10}
      />
      <Line
        position={[-280, lineY]}
        points={bigLinePoints}
        fill="white"
        lineWidth={18}
        closed
        radius={10}
      />
      <Line
        position={[0, lineY]}
        points={littleLinePoints}
        fill="white"
        lineWidth={18}
        closed
        radius={10}
      />
      <Line
        position={[320, lineY]}
        points={bigLinePoints}
        fill="white"
        lineWidth={18}
        closed
        radius={10}
      />
    </>
  );
};

export default CodeLine;
