import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneSixRegularIcon = (
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
    <path d='M21 19c0-2.734-2.266-5-5-5s-4.96 2.188-5 4.883V19c0 2.773 2.227 5 5 5 2.734 0 5-2.227 5-5m-6.328-6.094c.43-.078.86-.156 1.328-.156 3.438 0 6.25 2.813 6.25 6.25A6.243 6.243 0 0 1 16 25.25 6.22 6.22 0 0 1 9.75 19v-.195a6.35 6.35 0 0 1 1.602-4.024l6.054-6.797c.196-.273.625-.273.86-.039.273.196.273.625.039.86z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneSixRegularIcon);
export default ForwardRef;
