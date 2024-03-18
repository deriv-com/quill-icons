import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneChevronsRightFillIcon = (
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
    <path d='m24.36 17.398-7.5 7.5a1.205 1.205 0 0 1-1.758 0 1.205 1.205 0 0 1 0-1.757l6.601-6.641-6.601-6.602a1.205 1.205 0 0 1 0-1.757 1.205 1.205 0 0 1 1.757 0l7.5 7.5c.508.468.508 1.289 0 1.757m-15 7.5a1.205 1.205 0 0 1-1.758 0 1.205 1.205 0 0 1 0-1.757l6.601-6.641-6.601-6.602a1.205 1.205 0 0 1 0-1.757 1.205 1.205 0 0 1 1.757 0l7.5 7.5c.508.468.508 1.289 0 1.757z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneChevronsRightFillIcon);
export default ForwardRef;
