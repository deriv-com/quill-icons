import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyLinkedinIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule='evenodd'
      d='M14.841 0H1.206C.554 0 0 .516 0 1.151v13.697C0 15.484.363 16 1.016 16H14.65c.653 0 1.349-.516 1.349-1.152V1.151C16 .516 15.494 0 14.841 0M6.095 6.095H8.25v1.098h.024C8.6 6.601 9.57 6 10.77 6c2.302 0 2.944 1.222 2.944 3.486v4.228H11.43V9.902C11.429 8.89 11.024 8 10.078 8c-1.15 0-1.697.778-1.697 2.055v3.66H6.095zm-3.81 7.62h2.286v-7.62H2.286zM4.858 3.428a1.428 1.428 0 1 1-2.856 0 1.428 1.428 0 0 1 2.856 0'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(LegacyLinkedinIcon);
export default ForwardRef;
