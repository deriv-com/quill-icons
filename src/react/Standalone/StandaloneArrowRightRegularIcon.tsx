import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneArrowRightRegularIcon = (
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
    <path d='m24.555 16.969-6.875 6.875a.66.66 0 0 1-.899 0 .66.66 0 0 1 0-.899l5.82-5.82H7.876a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625h14.727l-5.82-5.781a.66.66 0 0 1 0-.899.66.66 0 0 1 .898 0l6.875 6.875a.66.66 0 0 1 0 .899' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowRightRegularIcon);
export default ForwardRef;
