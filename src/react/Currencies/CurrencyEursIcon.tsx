import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const CurrencyEursIcon = (
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
        fill='#fff'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='#2469E4'
        fillRule='evenodd'
        d='M0 16c0 8.837 7.163 16 16 16a15.947 15.947 0 0 0 6.351-1.31c-.773-.08-1.54-.199-2.3-.358-1.697-.365-3.252-.921-4.664-1.668-2.943-1.56-5.013-3.844-6.21-6.849H3.84l1.621-3.835H8.23a18.233 18.233 0 0 1-.15-2.266c0-.73.025-1.386.075-1.967H3.84l1.621-3.811h3.466c1.098-3.22 3.134-5.702 6.11-7.446A17.36 17.36 0 0 1 20.042.515 16.03 16.03 0 0 0 16 0C7.163 0 0 7.163 0 16M25.44 3.08c-4.917.63-9.81 2.669-11.63 6.857h14.82l-1.647 3.811H12.868c-.067.564-.1 1.253-.1 2.067 0 .814.067 1.536.2 2.165h12.07l-1.646 3.835h-8.903c2.021 3.333 7.176 5.497 12.571 5.747A15.955 15.955 0 0 0 32 16c0-5.306-2.583-10.009-6.56-12.92'
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
const ForwardRef = forwardRef(CurrencyEursIcon);
export default ForwardRef;
