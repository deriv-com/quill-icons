import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneArrowUpArrowDownFillIcon = (
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
    <path d='m11.86 8.14 3.75 3.75c.507.47.507 1.29 0 1.758a1.205 1.205 0 0 1-1.758 0l-1.602-1.601V24c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25V12.047l-1.64 1.601a1.205 1.205 0 0 1-1.758 0 1.205 1.205 0 0 1 0-1.757l3.75-3.75a1.205 1.205 0 0 1 1.757 0m13.75 13.008-3.75 3.75a1.205 1.205 0 0 1-1.758 0l-3.75-3.75a1.205 1.205 0 0 1 0-1.757 1.205 1.205 0 0 1 1.757 0l1.641 1.601V9c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25v11.992l1.602-1.601a1.205 1.205 0 0 1 1.757 0c.508.468.508 1.289 0 1.757' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowUpArrowDownFillIcon);
export default ForwardRef;
