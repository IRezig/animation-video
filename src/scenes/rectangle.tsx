import { Rect, Txt } from "@motion-canvas/2d";

const MyRect = ({ myRect, text }: { myRect; text: string }) => {
  return (
    <Rect
      ref={myRect}
      x={-900}
      width={100}
      height={100}
      fill="#000"
      radius={10}
    >
      <Txt text={text} fontSize={20} fill="#fff" x={0} y={0} />
    </Rect>
  );
};

export default MyRect;
