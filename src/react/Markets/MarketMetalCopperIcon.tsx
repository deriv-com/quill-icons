import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketMetalCopperIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath='url(#6111c3ba4be855e43f33582499e8508c__a)'>
      <path
        fill='#F3986F'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='#FFBEA0'
        d='M26.201 3.673a16 16 0 0 0-2.225-1.546l-21.85 21.85c.454.785.972 1.53 1.547 2.224zM7.722 29.695a16 16 0 0 1-3.155-2.502L27.193 4.567c.96.94 1.802 2 2.502 3.155zM12.396 31.593q-.75-.174-1.471-.415l20.253-20.253q.241.72.415 1.471z'
      />
      <path fill='#E76944' d='M29 16c0 7.18-5.82 13-13 13S3 23.18 3 16 8.82 3 16 3s13 5.82 13 13' />
      <path
        fill='#DB613D'
        d='M16 29c7.18 0 13-5.82 13-13 0-2.203-.548-4.279-1.516-6.097A25.83 25.83 0 0 0 9.903 27.484 12.94 12.94 0 0 0 16 29'
      />
      <path
        fill='#BC5C3F'
        d='M25.679 7.321A12.95 12.95 0 0 0 17 4C9.82 4 4 9.82 4 17c0 3.335 1.256 6.378 3.321 8.679A12.97 12.97 0 0 1 3 16C3 8.82 8.82 3 16 3c3.844 0 7.299 1.669 9.679 4.321'
      />
    </g>
    <defs>
      <clipPath id='6111c3ba4be855e43f33582499e8508c__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketMetalCopperIcon);
export default ForwardRef;
