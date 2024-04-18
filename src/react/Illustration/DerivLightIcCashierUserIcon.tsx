import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivLightIcCashierUserIcon = (
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
    <g clipPath='url(#e8eba2a344125165a98ef21470f24f0f__a)'>
      <path
        fill='#BBCCCE'
        d='M64 114.57c27.907 0 50.53-22.64 50.53-50.57 0-27.929-22.623-50.57-50.53-50.57S13.47 36.071 13.47 64 36.093 114.57 64 114.57'
      />
      <path
        fill='#F2F2F2'
        d='M64.26 65.4c11.228 0 20.33-9.107 20.33-20.34s-9.102-20.34-20.33-20.34-20.33 9.107-20.33 20.34S53.032 65.4 64.26 65.4'
      />
      <path
        fill='#F2F2F2'
        d='M47.89 62.24S52.36 69 64.26 69 80 62.24 80 62.24s18.21 7 18.21 26.14c0 0-9.43 14.9-33.46 14.9S29.8 88.38 29.8 88.38s.67-20.62 18.09-26.14'
      />
      <path
        fill='#84ABAE'
        d='M105 128c12.703 0 23-10.297 23-23s-10.297-23-23-23-23 10.298-23 23 10.298 23 23 23'
      />
      <path
        fill='#E1F4F3'
        d='M105.75 118.45a1.06 1.06 0 0 1-1.156.23 1.06 1.06 0 0 1-.654-.98V92.3a1.063 1.063 0 0 1 1.06-1.06 1.06 1.06 0 0 1 1.06 1.06v25.4c0 .281-.112.55-.31.75'
      />
      <path
        fill='#E1F4F3'
        d='M118.44 105.75c-.2.198-.469.31-.75.31H92.31a1.063 1.063 0 0 1-1.06-1.06 1.06 1.06 0 0 1 1.06-1.06h25.38q.212 0 .407.078a1.05 1.05 0 0 1 .653.982c-.002.28-.113.55-.31.75'
      />
    </g>
    <defs>
      <clipPath id='e8eba2a344125165a98ef21470f24f0f__a'>
        <path fill='#fff' d='M0 0h128v128H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(DerivLightIcCashierUserIcon);
export default ForwardRef;
