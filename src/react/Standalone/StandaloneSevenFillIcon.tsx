import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneSevenFillIcon = (
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
    <path d='M9.75 9c0-.664.547-1.25 1.25-1.25h10c.43 0 .86.273 1.055.664.234.39.234.86 0 1.25l-8.75 15c-.352.586-1.094.781-1.72.43-.585-.352-.78-1.094-.429-1.719l7.656-13.125H11c-.703 0-1.25-.547-1.25-1.25' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneSevenFillIcon);
export default ForwardRef;
