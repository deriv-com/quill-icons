import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedPenLineSmRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M11.883 4.844c-.31-.255-.62-.255-.93 0L9.45 6.32l2.106 2.106 1.476-1.504c.255-.31.255-.62 0-.93zm-9.488 8.531c-.201.219-.347.474-.438.766l-.738 2.515 2.515-.738c.292-.091.547-.237.766-.437l6.426-6.426L8.82 6.949zm7.93-9.16c.31-.292.674-.438 1.093-.438.401 0 .757.146 1.066.438L13.66 5.39c.292.31.438.665.438 1.066 0 .42-.146.784-.438 1.094l-8.558 8.558a2.59 2.59 0 0 1-1.094.657l-3.309.957c-.182.054-.328.018-.437-.11-.128-.11-.164-.246-.11-.41l.957-3.308c.128-.438.356-.812.684-1.122zm-3.637 12.66h8.75c.273.018.419.164.437.438-.018.273-.164.419-.437.437h-8.75c-.274-.018-.42-.164-.438-.437.018-.274.164-.42.438-.438'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenLineSmRegularIcon);
export default ForwardRef;
