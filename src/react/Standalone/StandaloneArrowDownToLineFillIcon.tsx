import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneArrowDownToLineFillIcon = (
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
    <path d='M9.75 25.25c-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25h12.5c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25zm7.11-5.352a1.205 1.205 0 0 1-1.758 0l-5-5a1.204 1.204 0 0 1 0-1.757 1.205 1.205 0 0 1 1.757 0l2.891 2.851V9c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25v6.992l2.852-2.851a1.205 1.205 0 0 1 1.757 0c.508.468.508 1.289 0 1.757z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowDownToLineFillIcon);
export default ForwardRef;
