import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const CurrencyBusdIcon = (
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
    <g clipPath='url(#af388bcda3d46569029891c0d1d64cfb__a)'>
      <path
        fill='#F0B90B'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='#fff'
        d='M23.522 13.5 26 16.03 16 26l-2.478-2.47zm-3.76-3.75 2.477 2.53-10 9.97-2.478-2.47zM8.477 13.5l2.477 2.53-2.477 2.47L6 16.03zM16 6l2.478 2.53-6.24 6.22-2.477-2.47z'
      />
    </g>
    <defs>
      <clipPath id='af388bcda3d46569029891c0d1d64cfb__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(CurrencyBusdIcon);
export default ForwardRef;
