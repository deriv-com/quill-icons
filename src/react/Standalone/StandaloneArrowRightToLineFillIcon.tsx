import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneArrowRightToLineFillIcon = (
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
    <path d='M24.75 10.25v12.5c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25v-12.5c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25m-5.39 7.148-5 5a1.205 1.205 0 0 1-1.758 0 1.205 1.205 0 0 1 0-1.757l2.851-2.891H8.5c-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25h6.953l-2.851-2.852a1.205 1.205 0 0 1 0-1.757 1.205 1.205 0 0 1 1.757 0l5 5c.508.468.508 1.289 0 1.757' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowRightToLineFillIcon);
export default ForwardRef;
