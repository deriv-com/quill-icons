import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyLeftIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 18 7'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath='url(#f7e3b5cedb162307ccabbec1a18053b8__a)'>
      <path
        fill='#333'
        fillRule='evenodd'
        d='M17.959 4a3 3 0 0 1-5.917 0H0V3h12.042a3 3 0 0 1 5.917 0H18v1z'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <clipPath id='f7e3b5cedb162307ccabbec1a18053b8__a'>
        <path fill='#fff' d='M0 0h18v7H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyLeftIcon);
export default ForwardRef;
