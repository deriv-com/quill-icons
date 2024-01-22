import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const IllustrativeAdvertiseIcon = (
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
      <path d='m19.087 15.493-9.814 1.84H6.667a3.335 3.335 0 0 0-3.334 3.334V22A3.345 3.345 0 0 0 6 25.267V28c0 1.1.9 2 2 2s2-.9 2-2v-2.533l9.087 1.706c.08.014.166.027.246.027.307 0 .607-.107.854-.307.306-.253.48-.626.48-1.026v-9.06a1.338 1.338 0 0 0-1.58-1.313M4.667 22v-1.333c0-1.1.9-2 2-2h2V24h-2c-1.1 0-2-.9-2-2M8 28.667A.669.669 0 0 1 7.333 28v-2.667h1.334V28c0 .367-.3.667-.667.667m11.333-2.8L10 24.113v-5.56l9.333-1.746zM17.333 2.667c-1.1 0-2 .9-2 2v6.666c0 1.1.9 2 2 2h4.974v1.694c0 .266.16.513.413.613a.663.663 0 0 0 .727-.14l2.166-2.167h1.06c1.1 0 2-.9 2-2V4.667c0-1.1-.9-2-2-2zm10 8.666c0 .367-.3.667-.666.667h-1.334a.689.689 0 0 0-.473.193l-1.22 1.22v-.753c0-.367-.3-.667-.667-.667h-5.64a.669.669 0 0 1-.666-.666v-6.66c0-.367.3-.667.666-.667h9.334c.366 0 .666.3.666.667z' />
      <path d='M19.333 8.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334M22 8.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334M24.667 8.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334M23.14 22.747a.672.672 0 0 0-.947 0c-.26.26-.26.68 0 .946l.474.474c.133.133.3.193.473.193s.34-.067.473-.193c.26-.26.26-.68 0-.94l-.473-.474zM24.553 20.667h-.94c-.366 0-.666.3-.666.666 0 .367.3.667.666.667h.94c.367 0 .667-.3.667-.667 0-.366-.3-.666-.667-.666M22.667 20.113c.173 0 .34-.066.473-.193l.473-.473a.664.664 0 1 0-.94-.94l-.473.473a.672.672 0 0 0 0 .947c.133.126.3.193.473.193z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IllustrativeAdvertiseIcon);
export default ForwardRef;
