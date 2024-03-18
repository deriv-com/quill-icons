import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandalonePresentationScreenFillIcon = (
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
    <path d='M6 6.5h20c.664 0 1.25.586 1.25 1.25C27.25 8.453 26.664 9 26 9v8.75c0 1.406-1.133 2.5-2.5 2.5h-6.25v1.367l2.734 2.774c.508.468.508 1.289 0 1.757a1.205 1.205 0 0 1-1.757 0L16 23.922l-2.266 2.226a1.205 1.205 0 0 1-1.757 0 1.205 1.205 0 0 1 0-1.757l2.773-2.774V20.25H8.5a2.47 2.47 0 0 1-2.5-2.5V9c-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25M8.5 9v8.75h15V9z' />
  </svg>
);
const ForwardRef = forwardRef(StandalonePresentationScreenFillIcon);
export default ForwardRef;
