import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneArrowUpAZFillIcon = (
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
    <path d='m11.898 8.18 3.438 3.75a1.24 1.24 0 0 1-.078 1.758 1.24 1.24 0 0 1-1.758-.079l-1.25-1.367V24c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25V12.242L8.46 13.61a1.24 1.24 0 0 1-1.757.079 1.24 1.24 0 0 1-.078-1.758l3.438-3.75c.234-.274.585-.43.937-.43s.664.156.898.43M17.25 19c0-.664.547-1.25 1.25-1.25h5c.508 0 .938.313 1.133.781a1.26 1.26 0 0 1-.274 1.367l-2.851 2.891H23.5c.664 0 1.25.547 1.25 1.25 0 .664-.586 1.25-1.25 1.25h-5a1.28 1.28 0 0 1-1.172-.781 1.26 1.26 0 0 1 .274-1.367l2.851-2.891H18.5c-.703 0-1.25-.547-1.25-1.25M21 7.75c.469 0 .898.273 1.094.703l2.5 5 .625 1.25a1.24 1.24 0 0 1-.547 1.68 1.24 1.24 0 0 1-1.68-.547l-.273-.586h-3.477l-.273.586a1.24 1.24 0 0 1-1.68.547 1.24 1.24 0 0 1-.547-1.68l.625-1.25 2.5-5c.195-.43.625-.703 1.133-.703m-.82 5.625h1.601L21 11.813z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowUpAZFillIcon);
export default ForwardRef;
