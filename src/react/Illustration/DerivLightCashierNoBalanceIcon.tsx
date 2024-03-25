import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivLightCashierNoBalanceIcon = (
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
    <path
      fill='#C7E5E5'
      fillRule='evenodd'
      d='M16.04 98.325h82.39c5.511-.027 9.973-4.489 10-10v-66.36c0-5.523-4.477-10-10-10H16.04c-5.523 0-10 4.477-10 10v66.31a10 10 0 0 0 10 10.05'
      clipRule='evenodd'
    />
    <path
      fill='#84ABAE'
      fillRule='evenodd'
      d='M111.33 42.185H96.02c-6.35 0-11.5 4.61-11.5 10.3v3c0 5.69 5.15 10.3 11.5 10.3h15.31a4.93 4.93 0 0 0 5.18-4.6v-14.37a4.92 4.92 0 0 0-5.18-4.63'
      clipRule='evenodd'
    />
    <path
      fill='#C7E5E5'
      fillRule='evenodd'
      d='M101.76 53.995a5.5 5.5 0 1 1-3.396-5.075 5.49 5.49 0 0 1 3.396 5.075'
      clipRule='evenodd'
    />
    <path
      fill='#FF444F'
      d='M99.56 116.035c12.371 0 22.4-10.029 22.4-22.4s-10.029-22.4-22.4-22.4-22.4 10.029-22.4 22.4 10.029 22.4 22.4 22.4'
    />
    <path
      fill='#fff'
      d='M97.3 101.995v-.61c0-1.09.66-1.93 2.26-1.93s2.25.84 2.25 1.93v.61c0 1.09-.66 1.92-2.25 1.92s-2.26-.83-2.26-1.92m1.5-6.49-1.2-7.2v-4.92a2.38 2.38 0 0 1 4 0v4.92l-1.17 7.2a.85.85 0 0 1-.795.569.84.84 0 0 1-.795-.569z'
    />
  </svg>
);
const ForwardRef = forwardRef(DerivLightCashierNoBalanceIcon);
export default ForwardRef;
