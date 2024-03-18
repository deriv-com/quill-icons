import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneChevronsDownFillIcon = (
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
    <path d='M16.86 24.898a1.205 1.205 0 0 1-1.758 0l-7.5-7.5a1.205 1.205 0 0 1 0-1.757 1.205 1.205 0 0 1 1.757 0L16 22.242l6.602-6.601a1.205 1.205 0 0 1 1.757 0c.508.468.508 1.289 0 1.757zm7.5-15-7.5 7.5a1.205 1.205 0 0 1-1.758 0l-7.5-7.5a1.205 1.205 0 0 1 0-1.757 1.205 1.205 0 0 1 1.757 0L16 14.742l6.602-6.601a1.205 1.205 0 0 1 1.757 0c.508.468.508 1.289 0 1.757' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneChevronsDownFillIcon);
export default ForwardRef;
