import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const MarketMetalZincIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fill='#889CBB'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16Z'
      />
      <path
        fill='#9BACC7'
        d='M26.201 3.673a16.037 16.037 0 0 0-2.225-1.546l-21.85 21.85c.454.785.972 1.53 1.547 2.224L26.201 3.673ZM7.722 29.695a16.068 16.068 0 0 1-3.155-2.502L27.193 4.567c.96.94 1.802 2 2.502 3.155L7.722 29.695ZM12.396 31.593c-.5-.116-.99-.254-1.471-.415l20.253-20.253c.16.48.3.971.415 1.471L12.396 31.593Z'
      />
      <path
        fill='#6C809E'
        d='M29 16c0 7.18-5.82 13-13 13S3 23.18 3 16 8.82 3 16 3s13 5.82 13 13Z'
      />
      <path
        fill='#647695'
        d='M16 29c7.18 0 13-5.82 13-13 0-2.204-.548-4.279-1.516-6.097A25.832 25.832 0 0 0 9.903 27.484 12.942 12.942 0 0 0 16 29Z'
      />
      <path
        fill='#3B4E6D'
        d='M25.679 7.321A12.952 12.952 0 0 0 17 4C9.82 4 4 9.82 4 17c0 3.335 1.256 6.378 3.321 8.679A12.968 12.968 0 0 1 3 16C3 8.82 8.82 3 16 3c3.844 0 7.299 1.669 9.679 4.321Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketMetalZincIcon);
export default ForwardRef;
