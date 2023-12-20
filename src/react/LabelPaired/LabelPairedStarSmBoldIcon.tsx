import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedStarSmBoldIcon = (
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
        d='M8 3.75a.694.694 0 0 1 .602.383l1.859 3.855 4.184.602c.273.055.455.21.546.465a.625.625 0 0 1-.164.656l-3.035 3.008.711 4.265c.037.256-.055.474-.273.657a.62.62 0 0 1-.684.027L8 15.672l-3.746 1.996a.591.591 0 0 1-.684-.055c-.218-.164-.31-.373-.273-.629l.71-4.265L.974 9.71a.625.625 0 0 1-.164-.656.685.685 0 0 1 .546-.465l4.184-.602L7.4 4.133A.694.694 0 0 1 8 3.75m0 2.16L6.55 8.863c-.09.2-.254.328-.491.383l-3.227.465 2.352 2.324c.145.164.21.356.191.574l-.574 3.282 2.898-1.532c.2-.109.401-.109.602 0l2.87 1.532-.546-3.282a.627.627 0 0 1 .191-.574l2.352-2.324-3.227-.465c-.237-.055-.4-.182-.492-.383z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStarSmBoldIcon);
export default ForwardRef;
