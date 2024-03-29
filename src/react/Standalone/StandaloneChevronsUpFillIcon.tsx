import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneChevronsUpFillIcon = (
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
    <path d='m16.86 8.14 7.5 7.5c.507.47.507 1.29 0 1.758a1.205 1.205 0 0 1-1.758 0L16 10.797l-6.64 6.601a1.205 1.205 0 0 1-1.758 0 1.205 1.205 0 0 1 0-1.757l7.5-7.5a1.205 1.205 0 0 1 1.757 0m7.5 15c.507.47.507 1.29 0 1.758a1.205 1.205 0 0 1-1.758 0L16 18.297l-6.64 6.601a1.205 1.205 0 0 1-1.758 0 1.205 1.205 0 0 1 0-1.757l7.5-7.5a1.205 1.205 0 0 1 1.757 0z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneChevronsUpFillIcon);
export default ForwardRef;
