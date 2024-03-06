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
    viewBox='0 0 115 123'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath='url(#b5c840ed2ec43fbb87d90be7df46d240__a)'>
      <path
        fill='#E0F0F0'
        d='M92 118H10c-5.523 0-10-4.477-10-10V10C0 4.477 4.477 0 10 0h70.37L102 21.64V108c0 5.523-4.477 10-10 10'
      />
      <path
        fill='#fff'
        d='M85.88 37.65H16.12a3 3 0 0 0-3 3v.68a3 3 0 0 0 3 3h69.76a3 3 0 0 0 3-3v-.68a3 3 0 0 0-3-3M85.88 51.98H16.12a3 3 0 0 0-3 3v.68a3 3 0 0 0 3 3h69.76a3 3 0 0 0 3-3v-.68a3 3 0 0 0-3-3M51.23 68.3H16.12a3 3 0 0 0-3 3v.68a3 3 0 0 0 3 3h35.11a3 3 0 0 0 3-3v-.68a3 3 0 0 0-3-3'
      />
      <path fill='#BBCCCE' d='M102 21.65H90.38c-5.523 0-10-4.477-10-10V0z' />
      <path
        fill='#FF444F'
        d='M115 93.41H75.49a3.85 3.85 0 0 1 3.85-3.86h31.81a3.86 3.86 0 0 1 3.85 3.83zm-39.51 25.7H115a3.86 3.86 0 0 1-3.85 3.85H79.34a3.85 3.85 0 0 1-3.85-3.85m0-25.7H115v25.69H75.49z'
      />
      <path
        fill='#fff'
        d='m98.67 112.81-1.93-7.67a3.61 3.61 0 0 0 2.09-3.88 3.63 3.63 0 0 0-7.22.58 3.62 3.62 0 0 0 2.14 3.3l-1.93 7.67a1.2 1.2 0 0 0 .633 1.377c.164.081.344.123.527.123h4.52a1.21 1.21 0 0 0 1.17-1.5'
      />
      <path
        fill='#FF444F'
        d='M110.93 89.52h-4.86V87a10.4 10.4 0 0 0-3.037-7.383 10.38 10.38 0 0 0-7.383-3.037h-.27A10.37 10.37 0 0 0 85 87v2.54h-4.89V87c.01-8.429 6.84-15.259 15.27-15.27h.27c8.433.006 15.269 6.837 15.28 15.27z'
      />
    </g>
    <defs>
      <clipPath id='b5c840ed2ec43fbb87d90be7df46d240__a'>
        <path fill='#fff' d='M0 0h115v123H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(DerivLightIcPoaLockIcon);
export default ForwardRef;
