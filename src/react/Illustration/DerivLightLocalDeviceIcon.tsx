import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivLightLocalDeviceIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 48 48'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath='url(#2e79b23f365962dc4f2433df86c8cb2f__a)'>
      <path
        fill='#064E72'
        d='M31.951 2.182h-15.97a2.924 2.924 0 0 0-2.924 2.924v37.789a2.923 2.923 0 0 0 2.923 2.923h15.971a2.923 2.923 0 0 0 2.924-2.923V5.105a2.924 2.924 0 0 0-2.924-2.923m-7.985 41.454a2.182 2.182 0 1 1 2.182-2.182 2.19 2.19 0 0 1-2.182 2.182m3.273-37.09h-6.546a1.091 1.091 0 0 1 0-2.182h6.546a1.09 1.09 0 1 1 0 2.181'
      />
      <path
        fill='#A8D0C8'
        d='M31.951 0h-15.97a5.11 5.11 0 0 0-5.106 5.106v37.789A5.11 5.11 0 0 0 15.98 48h15.971a5.11 5.11 0 0 0 5.106-5.105V5.105A5.11 5.11 0 0 0 31.95 0m2.924 42.895a2.923 2.923 0 0 1-2.924 2.923h-15.97a2.923 2.923 0 0 1-2.924-2.923V5.105a2.924 2.924 0 0 1 2.923-2.923h15.971a2.924 2.924 0 0 1 2.924 2.924z'
      />
      <path
        fill='#A8D0C8'
        d='M27.239 4.364h-6.546a1.09 1.09 0 1 0 0 2.181h6.546a1.09 1.09 0 0 0 0-2.181M26.148 41.454a2.182 2.182 0 1 1-4.364.001 2.182 2.182 0 0 1 4.364 0'
      />
    </g>
    <defs>
      <clipPath id='2e79b23f365962dc4f2433df86c8cb2f__a'>
        <path fill='#fff' d='M0 0h48v48H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(DerivLightLocalDeviceIcon);
export default ForwardRef;
