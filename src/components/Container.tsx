import { Img, makeScene2D, Rect, RectProps, Txt } from "@motion-canvas/2d";
import { createRef, makeRef, makeRefs } from "@motion-canvas/core/lib/utils";
import { BlackLabel, Colors, WhiteLabel } from "../styles";

interface ContainerRefs {
  rect: Rect;
  label: Txt;
}

export interface ContainerProps extends RectProps {
  label?: string;
  refs?: ContainerRefs;
  src: string;
}

export function Container({
  label = "",
  refs = {} as ContainerRefs,
  children,
  src,
  ref,
  ...rest
}: ContainerProps) {
  return (
    <Rect
      layout
      fill={Colors.surface}
      radius={8}
      ref={ref ?? makeRef(refs, "rect")}
      direction={"column"}
      padding={40}
      gap={20}
      {...rest}
    >
      <Rect layout radius={8}>
        <Img opacity={1} width={80} height={80} margin={20} src={src} />
        <Txt
          paddingRight={40}
          ref={makeRef(refs, "label")}
          lineHeight={60}
          marginTop={30}
          {...WhiteLabel}
        >
          {label}
        </Txt>
      </Rect>
      {children}
    </Rect>
  );
}
