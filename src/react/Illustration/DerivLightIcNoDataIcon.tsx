import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivLightIcNoDataIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 128 128'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath='url(#5275df795a47717bcee865a2875af22b__a)'>
      <mask
        id='5275df795a47717bcee865a2875af22b__b'
        width={128}
        height={128}
        x={0}
        y={0}
        maskUnits='userSpaceOnUse'
        style={{
          maskType: 'luminance',
        }}
      >
        <path fill='#fff' d='M0 0h128v128H0z' />
      </mask>
      <g mask='url(#5275df795a47717bcee865a2875af22b__b)'>
        <path
          stroke='#BBCCCE'
          strokeDasharray='4 4'
          strokeWidth={4}
          d='M30.874 6a9.02 9.02 0 0 0-6.333 2.757A9.07 9.07 0 0 0 22 15.194v97.612a9.07 9.07 0 0 0 2.54 6.437A9.02 9.02 0 0 0 30.874 122h66.252a9.02 9.02 0 0 0 6.333-2.757 9.07 9.07 0 0 0 2.54-6.437V34l-26-28z'
        />
        <path
          fill='#E0F0F0'
          d='M89 87H39a3 3 0 1 0 0 6h50a3 3 0 1 0 0-6M89 73H39a3 3 0 1 0 0 6h50a3 3 0 1 0 0-6M89 59H39a3 3 0 1 0 0 6h50a3 3 0 1 0 0-6M57 45H39a3 3 0 1 0 0 6h18a3 3 0 1 0 0-6M89 101H39a3 3 0 1 0 0 6h50a3 3 0 1 0 0-6'
        />
        <path fill='#BBCCCE' d='M80 6v23.45A4.483 4.483 0 0 0 84.415 34H106z' />
        <path fill='#E0F0F0' d='M0 26a8 8 0 0 1 8-8h10v92H8a8 8 0 0 1-8-8z' />
        <path
          fill='#85ACB0'
          fillRule='evenodd'
          d='M82.355 95.71c6.168 0 11.842-2.12 16.332-5.67l8.21 8.21-.388 3.495 11.647 11.647a5.49 5.49 0 0 0 3.87 1.567 5.5 5.5 0 0 0 3.854-1.608 5.5 5.5 0 0 0 1.608-3.854 5.49 5.49 0 0 0-1.567-3.87L114.274 93.98l-3.495.388-8.161-8.161a26.25 26.25 0 0 0 6.092-16.852C108.71 54.799 96.91 43 82.355 43S56 54.8 56 69.355 67.8 95.71 82.355 95.71m20.315-26.355c0 11.22-9.096 20.315-20.315 20.315S62.04 80.575 62.04 69.355 71.135 49.04 82.355 49.04s20.315 9.095 20.315 20.315'
          clipRule='evenodd'
        />
      </g>
    </g>
    <defs>
      <clipPath id='5275df795a47717bcee865a2875af22b__a'>
        <path fill='#fff' d='M0 0h128v128H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(DerivLightIcNoDataIcon);
export default ForwardRef;
