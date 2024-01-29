import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneChevronLeftBoldIcon = (
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
    <path d='m10.336 15.836 7.5-7.5q.664-.547 1.328 0 .547.664 0 1.328L12.328 16.5l6.836 6.836q.547.664 0 1.328-.664.547-1.328 0l-7.5-7.5q-.548-.664 0-1.328' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneChevronLeftBoldIcon);
export default ForwardRef;
