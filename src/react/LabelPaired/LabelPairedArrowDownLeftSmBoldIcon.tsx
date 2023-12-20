import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowDownLeftSmBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 11 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.781 15.125c-.4-.037-.62-.255-.656-.656V7.906c.036-.4.255-.62.656-.656.401.036.62.255.657.656v4.977l6.316-6.317c.31-.255.62-.255.93 0 .255.31.255.62 0 .93l-6.317 6.317h4.977c.4.036.62.255.656.656-.036.4-.255.62-.656.656z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownLeftSmBoldIcon);
export default ForwardRef;
