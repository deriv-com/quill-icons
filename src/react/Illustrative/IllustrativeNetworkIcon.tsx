import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const IllustrativeNetworkIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M15.447 10.667c1.653 0 3-1.347 3-3s-1.347-3-3-3-3 1.346-3 3 1.346 3 3 3m0-4.667a1.667 1.667 0 1 1-.002 3.335A1.667 1.667 0 0 1 15.447 6M20.113 15.333V14a2.666 2.666 0 0 0-2.666-2.667c-.367 0-.667.3-.667.667s.3.667.667.667c.733 0 1.333.6 1.333 1.333v1.333c0 .367-.3.667-.667.667H12.78a.67.67 0 0 1-.667-.667V14c0-.733.6-1.333 1.334-1.333.366 0 .666-.3.666-.667s-.3-.667-.666-.667A2.666 2.666 0 0 0 10.78 14v1.333c0 1.1.9 2 2 2h5.333c1.1 0 2-.9 2-2M23.333 23.333c1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.347-3 3 1.347 3 3 3m0-4.666a1.667 1.667 0 1 1 0 3.334 1.667 1.667 0 0 1 0-3.334M25.333 24c-.366 0-.666.3-.666.667 0 .366.3.666.666.666.734 0 1.334.6 1.334 1.334V28c0 .367-.3.667-.667.667h-5.333A.67.67 0 0 1 20 28v-1.333c0-.734.6-1.334 1.333-1.334.367 0 .667-.3.667-.666S21.7 24 21.333 24a2.666 2.666 0 0 0-2.666 2.667V28c0 1.1.9 2 2 2H26c1.1 0 2-.9 2-2v-1.333A2.666 2.666 0 0 0 25.333 24M7.333 23.333c1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.347-3 3 1.347 3 3 3m0-4.666a1.667 1.667 0 1 1 0 3.334 1.667 1.667 0 0 1 0-3.334M9.333 24c-.366 0-.666.3-.666.667 0 .366.3.666.666.666.734 0 1.334.6 1.334 1.334V28c0 .367-.3.667-.667.667H4.667A.67.67 0 0 1 4 28v-1.333c0-.734.6-1.334 1.333-1.334.367 0 .667-.3.667-.666S5.7 24 5.333 24a2.666 2.666 0 0 0-2.666 2.667V28c0 1.1.9 2 2 2H10c1.1 0 2-.9 2-2v-1.333A2.666 2.666 0 0 0 9.333 24M25.667 2a4.333 4.333 0 1 0 0 8.666 4.333 4.333 0 0 0 0-8.666m0 7.333c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.347 3 3-1.347 3-3 3' />
      <path d='m26.193 5.527-.86.86-.193-.194a.664.664 0 1 0-.94.94l.667.667c.133.133.3.193.473.193s.34-.066.473-.193l1.334-1.333a.664.664 0 1 0-.94-.94zM16 21.727v-2.394c0-.366-.3-.666-.667-.666-.366 0-.666.3-.666.666v2.394l-1.807 1.806a.664.664 0 0 0 .473 1.134c.174 0 .34-.067.474-.194l1.526-1.526 1.527 1.526c.133.134.3.194.473.194a.664.664 0 0 0 .473-1.133z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IllustrativeNetworkIcon);
export default ForwardRef;
