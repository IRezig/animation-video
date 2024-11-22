import { Img, Rect, RectProps, Txt } from '@motion-canvas/2d';
import { makeRef } from '@motion-canvas/core/lib/utils';
import { BlackLabel, Colors } from '../styles';

export function Pass({
  name,
  src,
  refs,
  ref,
  ...props
}: {
  name: string;
  src: string;
  refs?: {
    value: Rect;
  };
} & RectProps) {
  return (
    <Rect
      layout
      fill={Colors.whiteLabel}
      radius={8}
      ref={refs ? makeRef(refs, 'value') : ref}
      {...props}
    >
      <Img opacity={1} width={40} height={40} margin={20} src={src} />
      <Txt paddingRight={40} {...BlackLabel} lineHeight={80} cache>
        {name}
      </Txt>
    </Rect>
  );
}
