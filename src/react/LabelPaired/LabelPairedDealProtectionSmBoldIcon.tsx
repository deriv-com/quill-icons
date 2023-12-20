import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedDealProtectionSmBoldIcon = (
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
        d='M2.492 7.086h2.762c.465 0 .902.082 1.312.246.41.137.739.383 1.012.684.274.3.492.683.656 1.148.164.465.22.984.22 1.586 0 .629-.056 1.148-.22 1.613-.164.465-.382.848-.656 1.149-.273.3-.601.52-1.012.683a3.4 3.4 0 0 1-1.312.246H2.492zm2.762 5.934c.465 0 .848-.137 1.121-.41.273-.274.41-.684.41-1.286v-1.12c0-.602-.137-1.013-.41-1.286-.273-.273-.656-.41-1.121-.41H4.078v4.512zm4.539 1.394V7.086h3.473c.355 0 .656.082.93.191.273.11.492.274.683.465.191.219.355.465.465.766.082.273.136.601.136.93 0 .355-.027.683-.136.957-.11.3-.274.546-.465.738-.191.191-.41.355-.684.492-.273.11-.574.164-.93.164h-1.859v2.625zm1.613-4.02h1.668c.246 0 .438-.054.574-.19.137-.11.192-.302.192-.548V9.22c0-.246-.055-.438-.192-.547-.136-.137-.328-.192-.574-.192h-1.668z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDealProtectionSmBoldIcon);
export default ForwardRef;
