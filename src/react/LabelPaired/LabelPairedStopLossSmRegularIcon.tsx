import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedStopLossSmRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 18 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M6.21 14.55c-.628 0-1.147-.109-1.585-.327a3.179 3.179 0 0 1-1.094-.903l.82-.765c.247.3.547.547.848.71.301.165.656.247 1.067.247.464 0 .82-.11 1.066-.328.246-.22.356-.493.356-.848 0-.274-.083-.52-.247-.684-.164-.164-.464-.3-.902-.382l-.656-.11c-.711-.137-1.23-.355-1.586-.71-.383-.329-.547-.794-.547-1.368 0-.328.055-.629.164-.875.137-.273.3-.492.52-.656.218-.192.492-.328.82-.438.3-.082.656-.136 1.066-.136.547 0 1.012.082 1.422.3.41.164.766.465 1.04.82l-.821.739a2.409 2.409 0 0 0-.684-.602 2.338 2.338 0 0 0-1.039-.218c-.41 0-.738.082-.957.246-.246.164-.355.41-.355.738s.11.547.273.71c.192.138.492.247.903.33l.656.136c.71.136 1.258.383 1.586.71.355.329.52.794.52 1.395 0 .328-.055.656-.165.93-.136.273-.3.52-.547.71-.218.22-.492.356-.82.466-.328.11-.71.164-1.121.164m4.075-.136V7.086h1.176v6.289h2.98v1.04z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStopLossSmRegularIcon);
export default ForwardRef;
