import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const CurrencyDashIcon = (
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
        fill='#4165A5'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='#fff'
        fillRule='evenodd'
        d='M22.89 20.221c.65-1.203.975-2.613.975-4.232 0-1.634-.325-3.053-.976-4.256-.65-1.203-1.607-2.125-2.87-2.768-1.264-.643-2.78-.965-4.55-.965h-5.084v5.26H8.13v1.804h2.254V24h5.084c1.77 0 3.287-.33 4.55-.987 1.264-.658 2.22-1.589 2.871-2.792m-10.44-5.157v7.075h2.86c2.087 0 3.684-.537 4.788-1.611 1.104-1.075 1.657-2.588 1.657-4.54 0-1.951-.549-3.468-1.646-4.55-1.097-1.082-2.697-1.622-4.8-1.622h-2.86v3.444h4.098v1.804z'
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
const ForwardRef = forwardRef(CurrencyDashIcon);
export default ForwardRef;
