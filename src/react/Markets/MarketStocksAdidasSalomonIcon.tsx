import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const MarketStocksAdidasSalomonIcon = (
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
        fill='#F6F7F8'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='#246CB3'
        fillRule='evenodd'
        d='m21.123 6.25 6.462 7.113a1.934 1.934 0 0 1-.104 2.517c-1.117 1.229-4.288 4.618-4.288 4.618s-6.09-4.239-2.07-14.248'
        clipRule='evenodd'
      />
      <path
        fill='#010101'
        fillRule='evenodd'
        d='m17.588 4.355 2.694 2.996-1.624 3.516c-1.943 4.844-.212 6.417-.212 6.417l3.794 5.385s-3.688 3.427-5.312 4.784c-1.343 1.194-2.209.052-2.209.052l-.705-.742s1.404-7.18 1.783-9.027a3.236 3.236 0 0 0-.486-2.826l-5.07-5.496s4.266-3.969 5.184-4.948c.919-.98 2.163-.111 2.163-.111m-1.236 6.038c.098.867-.22 1.58-.76 1.683-.485.06-1.024-.593-1.13-1.409-.106-.816.273-1.506.759-1.632.486-.126 1.032.49 1.13 1.358'
        clipRule='evenodd'
      />
      <path
        fill='#CF4138'
        fillRule='evenodd'
        d='m9.15 9.25-4.677 4.207a2.055 2.055 0 0 0 .051 2.686c1.155 1.492 7.009 8.855 7.009 8.855s4.551-7.93-2.383-15.749'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksAdidasSalomonIcon);
export default ForwardRef;
