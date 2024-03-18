import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneChevronLeftFillIcon = (
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
    <path d='m10.102 15.64 7.5-7.5a1.205 1.205 0 0 1 1.757 0c.508.47.508 1.29 0 1.758L12.758 16.5l6.601 6.64c.508.47.508 1.29 0 1.758a1.205 1.205 0 0 1-1.757 0l-7.5-7.5a1.204 1.204 0 0 1 0-1.757' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneChevronLeftFillIcon);
export default ForwardRef;
