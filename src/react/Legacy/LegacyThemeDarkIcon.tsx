import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyThemeDarkIcon = (
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
    <g>
      <path d='M7.875 15.86c-3.61 0-6.79-2.44-7.72-5.93-.05-.17 0-.36.13-.48a.53.53 0 0 1 .48-.13c4.61 1.23 8.81-2.3 8.81-6.75 0-.59-.08-1.2-.25-1.81-.05-.17 0-.36.13-.48.13-.13.31-.18.48-.13 3.49.94 5.93 4.11 5.93 7.72 0 4.41-3.59 8-8 8zm-6.49-5.39a7 7 0 0 0 6.49 4.39c3.86 0 7-3.14 7-7 0-2.88-1.77-5.43-4.39-6.49.06.4.09.8.09 1.19 0 4.8-4.27 8.69-9.19 7.91' />
    </g>
    <defs>
      <clipPath id='b1615271aed2d30e8aa1516156e412fb__a'>
        <path d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyThemeDarkIcon);
export default ForwardRef;
