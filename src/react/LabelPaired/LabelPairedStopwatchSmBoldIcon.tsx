import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedStopwatchSmBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 13 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M4.313 4.406c.036-.4.255-.62.656-.656H8.03c.401.036.62.255.656.656-.036.401-.255.62-.656.657h-.875v1.34c1.203.163 2.242.628 3.117 1.394l.793-.793c.31-.255.62-.255.93 0 .255.31.255.62 0 .93l-.848.847c.675.948 1.021 2.042 1.04 3.281-.037 1.605-.593 2.945-1.668 4.02-1.076 1.076-2.416 1.631-4.02 1.668-1.604-.037-2.944-.592-4.02-1.668C1.405 15.007.85 13.667.813 12.062c.036-1.494.519-2.761 1.449-3.8.948-1.04 2.142-1.66 3.582-1.86v-1.34h-.875c-.401-.036-.62-.255-.657-.656M6.5 16.438c.784 0 1.513-.192 2.188-.575A4.56 4.56 0 0 0 10.3 14.25a4.458 4.458 0 0 0 0-4.375 4.56 4.56 0 0 0-1.614-1.613A4.358 4.358 0 0 0 6.5 7.687c-.784 0-1.513.192-2.187.575a4.56 4.56 0 0 0-1.614 1.613 4.458 4.458 0 0 0 0 4.375 4.56 4.56 0 0 0 1.614 1.613 4.358 4.358 0 0 0 2.187.575m.656-6.782V12.5c-.036.401-.255.62-.656.656-.401-.036-.62-.255-.656-.656V9.656c.036-.4.255-.62.656-.656.401.036.62.255.656.656'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStopwatchSmBoldIcon);
export default ForwardRef;
