import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivLightIcCashierLockedIcon = (
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
    <g clipPath='url(#22cb2da0633658e75e0738c113937d8e__a)'>
      <path
        fill='#C7E5E5'
        d='M109.93 54.93H19v-.09A8.87 8.87 0 0 1 27.89 46h73.17a8.873 8.873 0 0 1 8.87 8.86zM19 114h90.91v.09a8.86 8.86 0 0 1-2.598 6.272 8.87 8.87 0 0 1-6.272 2.598H27.89a8.87 8.87 0 0 1-8.89-8.83z'
      />
      <path fill='#C7E5E5' d='M19.02 54.93h90.91v59.11H19.02z' />
      <path
        fill='#85ACB0'
        d='m72.35 99.56-4.44-17.64a8.36 8.36 0 1 0-6.87 0L56.6 99.56a2.762 2.762 0 0 0 2.68 3.44h10.39a2.76 2.76 0 0 0 2.707-2.194 2.76 2.76 0 0 0-.027-1.246'
      />
      <path
        fill='#BCCDCE'
        d='M100.55 46H89.39v-5.87c0-11.13-8.55-24-24-24h-.64c-15.42 0-24 12.83-24 24V46h-11.1v-5.87C29.672 20.737 45.387 5.022 64.78 5h.64c19.393.022 35.108 15.737 35.13 35.13z'
      />
    </g>
    <defs>
      <clipPath id='22cb2da0633658e75e0738c113937d8e__a'>
        <path fill='#fff' d='M0 0h128v128H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(DerivLightIcCashierLockedIcon);
export default ForwardRef;
