import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const IllustrativeListIcon = (
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
      <path d='m27.2 5.347-1.667.333a.66.66 0 0 0-.5.44l-.333 1a.667.667 0 0 0 1.267.42l.213-.633 1.287-.26A.668.668 0 0 0 27.2 5.34z' />
      <path d='M25.667 2a4.34 4.34 0 0 0-4.334 4.333 4.34 4.34 0 0 0 4.334 4.334A4.34 4.34 0 0 0 30 6.333 4.34 4.34 0 0 0 25.667 2m0 7.333c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.347 3 3-1.347 3-3 3M22 26h-.667V11.333c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2V16c0 1.1.9 2 2 2h.667v10.667c0 1.1.9 2 2 2H22c1.1 0 2-.9 2-2V28c0-1.1-.9-2-2-2m-2-14.667V26H9.333c-1.1 0-2 .9-2 2v.667c0 .366-.3.666-.666.666A.67.67 0 0 1 6 28.667V11.333c0-.233-.047-.46-.12-.666h13.453c.367 0 .667.3.667.666M4 16.667A.67.67 0 0 1 3.333 16v-4.667c0-.366.3-.666.667-.666s.667.3.667.666v5.334zm18.667 12c0 .366-.3.666-.667.666H8.547c.073-.206.12-.433.12-.666V28c0-.367.3-.667.666-.667H22c.367 0 .667.3.667.667z' />
      <path d='M9.333 15.333h7.334c.366 0 .666-.3.666-.666s-.3-.667-.666-.667H9.333c-.366 0-.666.3-.666.667 0 .366.3.666.666.666M8.667 18h8.666c.367 0 .667-.3.667-.667 0-.366-.3-.666-.667-.666H8.667c-.367 0-.667.3-.667.666s.3.667.667.667M9.333 19.333c-.366 0-.666.3-.666.667s.3.667.666.667h7.334c.366 0 .666-.3.666-.667s-.3-.667-.666-.667zM8.667 23.333h8.666c.367 0 .667-.3.667-.666S17.7 22 17.333 22H8.667C8.3 22 8 22.3 8 22.667c0 .366.3.666.667.666' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IllustrativeListIcon);
export default ForwardRef;
