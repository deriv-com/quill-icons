import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedTakeProfitSmBoldIcon = (
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
        d='M6.402 8.508v5.906H4.79V8.508H2.82V7.086h5.551v1.422zm3.063 5.906V7.086h3.473c.328 0 .656.082.93.191.273.11.491.274.683.465.191.219.355.465.465.766a3.313 3.313 0 0 1 0 1.887c-.11.3-.274.546-.465.738-.192.191-.41.355-.684.492-.273.11-.574.164-.93.164h-1.859v2.625zm1.613-4.02h1.668c.246 0 .438-.054.547-.19.164-.11.219-.302.219-.548V9.22c0-.246-.055-.438-.219-.547-.11-.137-.3-.192-.547-.192h-1.668z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTakeProfitSmBoldIcon);
export default ForwardRef;
