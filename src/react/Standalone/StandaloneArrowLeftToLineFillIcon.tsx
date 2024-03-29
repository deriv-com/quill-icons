import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneArrowLeftToLineFillIcon = (
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
    <path d='M7.25 10.25C7.25 9.586 7.797 9 8.5 9c.664 0 1.25.586 1.25 1.25v12.5c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25zm5.352 7.148a1.205 1.205 0 0 1 0-1.757l5-5a1.205 1.205 0 0 1 1.757 0c.508.468.508 1.289 0 1.757l-2.851 2.852H23.5c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25h-6.992l2.851 2.89c.508.47.508 1.29 0 1.758a1.205 1.205 0 0 1-1.757 0z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowLeftToLineFillIcon);
export default ForwardRef;
