import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedSterlingSignBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 10 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M3 8.969V11h4.25c.458.042.708.292.75.75-.042.458-.292.708-.75.75H3v1.969c0 .812-.198 1.573-.594 2.281L2 17.5h7.25c.458.042.708.292.75.75-.042.458-.292.708-.75.75H.75c-.27 0-.49-.125-.656-.375-.125-.23-.125-.469 0-.719l1-1.875c.27-.479.406-1 .406-1.562V12.5H.75c-.458-.042-.708-.292-.75-.75.042-.458.292-.708.75-.75h.75V8.969c.02-1.125.406-2.063 1.156-2.813.75-.75 1.688-1.135 2.813-1.156.437 0 .864.073 1.281.219l2.5.812c.417.188.573.51.469.969-.188.417-.51.573-.969.469l-2.5-.844a2.454 2.454 0 0 0-.781-.125c-.688.02-1.271.26-1.75.719C3.26 7.698 3.02 8.28 3 8.969'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSterlingSignBoldIcon);
export default ForwardRef;
