import { Line } from "@motion-canvas/2d";

const CodeLine2 = ({ lineY }: { lineY: number }) => {
  const SLine = [
    [-20, 10],
    [100, 10],
    [100, -10],
    [-20, -10],
  ];
  const MLine = [
    [-120, 10],
    [200, 10],
    [200, -10],
    [-120, -10],
  ];
  const LLine = [
    [-200, 10],
    [240, 10],
    [240, -10],
    [-200, -10],
  ];

  return (
    <>
      <Line
        position={[-500, lineY]}
        points={MLine}
        fill="white"
        lineWidth={8}
        closed
        radius={10}
      />
      <Line
        position={[-250, lineY]}
        points={SLine}
        fill="red"
        lineWidth={18}
        closed
        radius={10}
      />
      <Line
        position={[80, lineY]}
        points={LLine}
        fill="white"
        lineWidth={18}
        closed
        radius={10}
      />
      <Line
        position={[360, lineY]}
        points={SLine}
        fill="white"
        lineWidth={18}
        closed
        radius={10}
      />
    </>
  );
};

export default CodeLine2;
