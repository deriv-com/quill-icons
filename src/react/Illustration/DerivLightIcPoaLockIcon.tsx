import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivLightIcPoaLockIcon = (
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
    <g clipPath='url(#72dbd74f802d4cbe12b67865d60383e3__a)'>
      <path
        fill='#E0F0F0'
        d='M98 120H16c-5.523 0-10-4.477-10-10V12C6 6.477 10.477 2 16 2h70.37L108 23.64V110c0 5.523-4.477 10-10 10'
      />
      <path
        fill='#fff'
        d='M91.88 39.65H22.12a3 3 0 0 0-3 3v.68a3 3 0 0 0 3 3h69.76a3 3 0 0 0 3-3v-.68a3 3 0 0 0-3-3M91.88 53.98H22.12a3 3 0 0 0-3 3v.68a3 3 0 0 0 3 3h69.76a3 3 0 0 0 3-3v-.68a3 3 0 0 0-3-3M57.23 70.3H22.12a3 3 0 0 0-3 3v.68a3 3 0 0 0 3 3h35.11a3 3 0 0 0 3-3v-.68a3 3 0 0 0-3-3'
      />
      <path fill='#BBCCCE' d='M108 23.65H96.38c-5.523 0-10-4.477-10-10V2z' />
      <path
        fill='#FF444F'
        d='M121 95.41H81.49a3.85 3.85 0 0 1 3.85-3.86h31.81a3.86 3.86 0 0 1 3.85 3.83zm-39.51 25.7H121a3.86 3.86 0 0 1-3.85 3.85H85.34a3.85 3.85 0 0 1-3.85-3.85m0-25.7H121v25.69H81.49z'
      />
      <path
        fill='#fff'
        d='m104.67 114.81-1.93-7.67a3.61 3.61 0 0 0 2.09-3.88 3.63 3.63 0 0 0-3.881-3.083 3.63 3.63 0 0 0-3.339 3.663 3.62 3.62 0 0 0 2.14 3.3l-1.93 7.67a1.2 1.2 0 0 0 .633 1.377c.164.081.344.123.527.123h4.52a1.21 1.21 0 0 0 1.179-.958 1.2 1.2 0 0 0-.009-.542'
      />
      <path
        fill='#FF444F'
        d='M116.93 91.52h-4.86V89a10.4 10.4 0 0 0-3.037-7.383 10.37 10.37 0 0 0-7.383-3.037h-.27A10.37 10.37 0 0 0 91 89v2.54h-4.89V89c.01-8.429 6.84-15.259 15.27-15.27h.27c8.433.006 15.269 6.837 15.28 15.27z'
      />
    </g>
    <defs>
      <clipPath id='72dbd74f802d4cbe12b67865d60383e3__a'>
        <path fill='#fff' d='M0 0h128v128H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(DerivLightIcPoaLockIcon);
export default ForwardRef;
