import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyLocation2pxIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 16 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g
      fill='#333'
      fillRule='evenodd'
      clipPath='url(#f626844d61d4c3296deef7b893f5ede8__a)'
      clipRule='evenodd'
    >
      <path d='M8 3.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5M6.75 6a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0' />
      <path d='M8 0a6 6 0 0 0-6 6c0 3.186 1.776 5.69 5.247 9.659a1 1 0 0 0 1.506 0C12.224 11.69 14 9.186 14 6a6 6 0 0 0-6-6M4 6a4 4 0 1 1 8 0c0 2.162-1.048 4.012-4 7.471C5.048 10.012 4 8.162 4 6' />
    </g>
    <defs>
      <clipPath id='f626844d61d4c3296deef7b893f5ede8__a'>
        <path fill='#fff' d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyLocation2pxIcon);
export default ForwardRef;
