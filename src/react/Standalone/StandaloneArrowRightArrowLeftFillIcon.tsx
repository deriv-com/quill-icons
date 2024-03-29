import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneArrowRightArrowLeftFillIcon = (
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
    <path d='m24.36 12.398-3.75 3.75a1.205 1.205 0 0 1-1.758 0 1.205 1.205 0 0 1 0-1.757l1.601-1.641H8.5c-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25h11.953l-1.601-1.602a1.205 1.205 0 0 1 0-1.757 1.205 1.205 0 0 1 1.757 0l3.75 3.75c.508.468.508 1.289 0 1.757m-13.008 13.75-3.75-3.75a1.205 1.205 0 0 1 0-1.757l3.75-3.75a1.205 1.205 0 0 1 1.757 0c.508.468.508 1.289 0 1.757l-1.601 1.602H23.5c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25H11.508l1.601 1.64c.508.47.508 1.29 0 1.758a1.205 1.205 0 0 1-1.757 0' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowRightArrowLeftFillIcon);
export default ForwardRef;
