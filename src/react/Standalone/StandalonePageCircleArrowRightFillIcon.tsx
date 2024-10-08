import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandalonePageCircleArrowRightFillIcon = (
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
    <path d='M4.75 9c0-1.367 1.094-2.5 2.5-2.5h7.07c.664 0 1.29.273 1.758.742l2.93 2.93c.469.469.742 1.094.742 1.758v2.343c-2.89.82-5 3.477-5 6.602a6.97 6.97 0 0 0 2.852 5.625H7.25a2.47 2.47 0 0 1-2.5-2.5zM16 20.875c0-3.086 2.5-5.625 5.625-5.625 3.086 0 5.625 2.54 5.625 5.625a5.626 5.626 0 0 1-5.625 5.625A5.6 5.6 0 0 1 16 20.875m2.5 0c0 .352.273.625.625.625h3.477l-1.133 1.133a.66.66 0 0 0 0 .898.66.66 0 0 0 .898 0l2.188-2.187a.66.66 0 0 0 0-.899l-2.188-2.187a.66.66 0 0 0-.898 0 .66.66 0 0 0 0 .898l1.133 1.094h-3.477a.64.64 0 0 0-.625.625' />
  </svg>
);
const ForwardRef = forwardRef(StandalonePageCircleArrowRightFillIcon);
export default ForwardRef;
