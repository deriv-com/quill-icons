import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedSquareCaptionBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M9.25 5.375h-7.5q-.352.023-.375.375v7.5q.023.352.375.375h7.5q.352-.023.375-.375v-7.5q-.023-.352-.375-.375M1.75 4.25h7.5q.633.024 1.055.445.421.423.445 1.055v7.5a1.52 1.52 0 0 1-.445 1.055q-.422.421-1.055.445h-7.5a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 .25 13.25v-7.5q.024-.632.445-1.055.422-.421 1.055-.445' />
    </g>
    <defs>
      <clipPath id='8aa63cf91404d7059d67ef6eab069f9e__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSquareCaptionBoldIcon);
export default ForwardRef;
