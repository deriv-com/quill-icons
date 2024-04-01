import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivLightIcCashierSendEmailIcon = (
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
    <g clipPath='url(#b82a616a048d4f4311bc0231586f5694__a)'>
      <path
        fill='#BBCCCE'
        d='M13 45.56v5.11L50.62 80.5l12.68-9.44L76.67 81 115 48v-2a1.997 1.997 0 0 0-.94-1.7l-47.95-30a4 4 0 0 0-4.23 0L14 43.85a2 2 0 0 0-1 1.71'
      />
      <path
        fill='#84ABAE'
        d='M76.67 81 115 48v62.93a4.83 4.83 0 0 1-1.2 3.07zM14.2 114a4.83 4.83 0 0 1-1.2-3.07V48l38.33 33z'
      />
      <path
        fill='#E1F4F3'
        d='M107 54.89 76.67 81 64 70 51 80.77 21 54.89V31c0-2.21 1.79-4 4-4h78c2.21 0 4 1.79 4 4z'
      />
      <path fill='#84ABAE' d='m14.2 114 47.1-42.2c1.49-1.4 3.81-1.4 5.3 0l47.2 42.2' />
      <path
        fill='#C7E5E5'
        d='M14.2 114h1.5L62 72.54a2.88 2.88 0 0 1 3.94 0L112.3 114h1.5q.345-.372.6-.81L67.27 71.05l-.67.75.68-.73a4.86 4.86 0 0 0-6.66 0l.68.73-.67-.74-47 42.13q.247.444.6.81'
      />
      <path
        fill='#84ABAE'
        d='M73.14 55.35 66 56a.92.92 0 0 1-1-1l.64-7.12 30-30a4 4 0 0 1 5.65 0l1.83 1.83a4 4 0 0 1 0 5.65z'
      />
      <path
        fill='#C7E5E5'
        d='M63 41H28a1 1 0 1 1 0-2h35a.94.94 0 0 1 .727.273c.191.192.29.457.273.727a1 1 0 0 1-1 1m-35 4h27a1 1 0 0 1 0 2H28a1 1 0 1 1 0-2m0 6h19a1 1 0 0 1 0 2H28a1 1 0 1 1 0-2'
      />
    </g>
    <defs>
      <clipPath id='b82a616a048d4f4311bc0231586f5694__a'>
        <path fill='#fff' d='M0 0h128v128H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(DerivLightIcCashierSendEmailIcon);
export default ForwardRef;
