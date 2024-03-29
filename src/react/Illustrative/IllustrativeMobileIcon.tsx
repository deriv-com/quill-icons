import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const IllustrativeMobileIcon = (
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
      <path d='M10.107 21.333c0 .367.3.667.666.667h3.794c.366 0 .666-.3.666-.667 0-.366-.3-.666-.666-.666h-3.794c-.366 0-.666.3-.666.666' />
      <path d='M19.333 12H18v-1.333a3.335 3.335 0 0 0-3.333-3.334h-4a3.335 3.335 0 0 0-3.334 3.334v10.666a3.335 3.335 0 0 0 3.334 3.334h4A3.334 3.334 0 0 0 18 21.333V20.12A1.99 1.99 0 0 1 19.333 22a3.334 3.334 0 0 0 3.334 3.333c.366 0 .666-.3.666-.666s-.3-.667-.666-.667c-1.1 0-2-.9-2-2a3.335 3.335 0 0 0-3.334-3.333h-.666c-1.1 0-2-.9-2-2h4c.366 0 .666-.3.666-.667s-.3-.667-.666-.667H18v-2h1.333A4.67 4.67 0 0 1 24 18v1.333c0 .367.3.667.667.667.366 0 .666-.3.666-.667V18c0-3.307-2.693-6-6-6m-4.666 3.333c-.734 0-1.334.6-1.334 1.334A3.335 3.335 0 0 0 16.667 20v1.333c0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2V10.667c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v4.666z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IllustrativeMobileIcon);
export default ForwardRef;
