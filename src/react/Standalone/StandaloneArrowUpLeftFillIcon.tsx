import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneArrowUpLeftFillIcon = (
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
    <path d='M11 10.25h8.75c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25h-5.742l7.851 7.89c.508.47.508 1.29 0 1.758a1.205 1.205 0 0 1-1.757 0l-7.852-7.851v5.703c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25V11.5c0-.664.547-1.25 1.25-1.25' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowUpLeftFillIcon);
export default ForwardRef;
