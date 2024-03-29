import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const IllustrativeResponsiveIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M30 10.667c-.367 0-.667.3-.667.666v9.334c0 1.1-.9 2-2 2H14c-.367 0-.667.3-.667.666s.3.667.667.667h2.667v2H14c-.367 0-.667.3-.667.667 0 .366.3.666.667.666h6.667c.366 0 .666-.3.666-.666s-.3-.667-.666-.667H18v-2h9.333a3.334 3.334 0 0 0 3.334-3.333v-9.334c0-.366-.3-.666-.667-.666M4.667 12c.366 0 .666-.3.666-.667v-2c0-1.1.9-2 2-2H20c.367 0 .667-.3.667-.666S20.367 6 20 6H7.333A3.335 3.335 0 0 0 4 9.333v2c0 .367.3.667.667.667M8.667 26.533h-4c-.367 0-.667.3-.667.667s.3.667.667.667h4c.366 0 .666-.3.666-.667s-.3-.667-.666-.667' />
      <path d='M9.333 13.333H4A2.666 2.666 0 0 0 1.333 16v12A2.666 2.666 0 0 0 4 30.667h5.333A2.666 2.666 0 0 0 12 28V16a2.666 2.666 0 0 0-2.667-2.667M10.667 28c0 .733-.6 1.333-1.334 1.333H4c-.733 0-1.333-.6-1.333-1.333V16c0-.733.6-1.333 1.333-1.333h5.333c.734 0 1.334.6 1.334 1.333zM26.333 10.667a4.333 4.333 0 1 0 0-8.667 4.333 4.333 0 0 0 0 8.667m0-7.334c1.654 0 3 1.347 3 3s-1.346 3-3 3-3-1.346-3-3 1.347-3 3-3' />
      <path d='M25.527 7.807c.133.133.3.193.473.193s.34-.067.473-.193l1.334-1.334a.664.664 0 1 0-.94-.94l-.86.86-.194-.193a.664.664 0 1 0-.94.94l.667.667z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IllustrativeResponsiveIcon);
export default ForwardRef;
