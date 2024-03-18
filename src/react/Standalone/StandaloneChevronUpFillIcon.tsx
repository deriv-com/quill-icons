import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneChevronUpFillIcon = (
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
    <path d='M15.102 10.64a1.205 1.205 0 0 1 1.757 0l7.5 7.5c.508.47.508 1.29 0 1.758a1.205 1.205 0 0 1-1.757 0L16 13.297l-6.64 6.601a1.205 1.205 0 0 1-1.758 0 1.205 1.205 0 0 1 0-1.757z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneChevronUpFillIcon);
export default ForwardRef;
