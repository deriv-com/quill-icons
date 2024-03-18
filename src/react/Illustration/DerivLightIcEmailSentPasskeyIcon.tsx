import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivLightIcEmailSentPasskeyIcon = (
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
    <g fillRule='evenodd' clipRule='evenodd'>
      <path
        fill='#414652'
        d='M123 109.615H5V51.962L55.493 7.81c.46-.402.951-.775 1.491-1.06a14.95 14.95 0 0 1 14.032 0c.54.285 1.031.658 1.491 1.06L123 51.962z'
      />
      <path
        fill='#fff'
        stroke='#FF444F'
        d='M23.124 102.415c-5.307 0-9.624-4.21-9.624-9.386V22.882c0-5.173 4.315-9.382 9.62-9.382h64.984l26.323 25.703v53.826c0 5.176-4.318 9.386-9.624 9.386z'
      />
      <path
        fill='#FF444F'
        d='M98 38.993h16.618L88 13v15.993c0 5.523 4.478 10 10 10M98.903 49h-67.94c-1.65 0-3-1.35-3-3s1.35-3 3-3h67.94c1.649 0 3 1.35 3 3s-1.351 3-3 3M98.903 63h-67.94c-1.65 0-3-1.35-3-3s1.35-3 3-3h67.94c1.649 0 3 1.35 3 3s-1.351 3-3 3M65.082 77h-34.12c-1.65 0-3-1.35-3-3s1.35-3 3-3h34.12c1.65 0 3 1.35 3 3s-1.35 3-3 3'
      />
      <path
        fill='#5C616D'
        d='M113 123H15c-5.522 0-10-4.478-10-10V51.962l59 35.519 59-35.519V113c0 5.522-4.478 10-10 10'
      />
      <path
        fill='#414652'
        d='m5 114.183 54.658-33.502a8.31 8.31 0 0 1 8.684 0L123 114.183a8.82 8.82 0 0 1-8.817 8.817H13.817A8.82 8.82 0 0 1 5 114.183'
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(DerivLightIcEmailSentPasskeyIcon);
export default ForwardRef;
