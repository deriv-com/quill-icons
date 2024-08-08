import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivLightNoRecentTransactionsIcon = (
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
    <g clipPath='url(#709a37e6d88a49198ad708d99ce4c6a4__a)'>
      <path
        fill='url(#709a37e6d88a49198ad708d99ce4c6a4__b)'
        d='M64 128c35.346 0 64-28.654 64-64S99.346 0 64 0 0 28.654 0 64s28.654 64 64 64'
      />
      <path
        fill='url(#709a37e6d88a49198ad708d99ce4c6a4__c)'
        d='M105 55c0-11.03-8.97-20-20-20-4.18 0-8.07 1.3-11.28 3.5H50.75L27.25 62v54.38C37.65 123.69 50.32 128 64 128s26.55-4.38 37-11.8V66.94c2.5-3.34 4-7.47 4-11.95z'
      />
      <path
        fill='#FF444F'
        d='M104.36 70.82C107.89 66.51 110 61 110 55c0-13.81-11.19-25-25-25S60 41.19 60 55s11.19 25 25 25c6 0 11.51-2.12 15.82-5.64l19.69 19.69a63 63 0 0 0 2.3-4.77l-18.45-18.45zM85 75c-11.03 0-20-8.97-20-20s8.97-20 20-20 20 8.97 20 20-8.97 20-20 20'
      />
      <path fill='#fff' d='M50.75 38.5 27.25 62h19.5c2.21 0 4-1.79 4-4z' />
    </g>
    <defs>
      <linearGradient
        id='709a37e6d88a49198ad708d99ce4c6a4__b'
        x1={64}
        x2={64}
        y1={128}
        y2={0}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#85ACB0' />
        <stop offset={1} stopColor='#B6CDD0' />
      </linearGradient>
      <linearGradient
        id='709a37e6d88a49198ad708d99ce4c6a4__c'
        x1={63.992}
        x2={64.003}
        y1={0}
        y2={128}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#F5F5F5' />
        <stop offset={0.37} stopColor='#ECECEC' />
        <stop offset={0.96} stopColor='#D3D3D3' />
        <stop offset={1} stopColor='#D2D2D2' />
      </linearGradient>
      <clipPath id='709a37e6d88a49198ad708d99ce4c6a4__a'>
        <path fill='#fff' d='M0 0h128v128H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(DerivLightNoRecentTransactionsIcon);
export default ForwardRef;
