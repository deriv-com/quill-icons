import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneMinusFillIcon = (
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
    <path d='M24.125 16.5c0 .703-.586 1.25-1.25 1.25H9.125c-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25h13.75c.664 0 1.25.586 1.25 1.25' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneMinusFillIcon);
export default ForwardRef;
