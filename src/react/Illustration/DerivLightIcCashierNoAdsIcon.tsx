import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivLightIcCashierNoAdsIcon = (
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
    <g clipPath='url(#089eed3a7a0b09058532987f02d24935__a)'>
      <path
        fill='#E0F0F0'
        d='M30.4 5.33a9.16 9.16 0 0 0-9 9.3v98.74a9.16 9.16 0 0 0 9 9.3h67.2a9.158 9.158 0 0 0 9-9.3V33.55L80.06 5.33z'
      />
      <path fill='#BBCCCE' d='M80.06 5.33V28.9a4.58 4.58 0 0 0 4.51 4.65h22.06z' />
      <path
        fill='#BCCDCE'
        d='m42.139 38.89-1.026-3.405h-4.779L35.31 38.89H32.15l4.718-14.316h3.856l4.655 14.316zm-3.384-11.486h-.103l-1.58 5.436h3.282zm8.605-2.83h5.394q1.416 0 2.584.451 1.17.451 1.99 1.354.82.882 1.271 2.235.452 1.334.452 3.118 0 1.785-.452 3.138-.45 1.333-1.271 2.236a5.3 5.3 0 0 1-1.99 1.333q-1.168.45-2.584.451H47.36zm5.394 11.547q1.395 0 2.195-.78.8-.779.8-2.501v-2.216q0-1.722-.8-2.502t-2.195-.78h-2.276v8.78z'
      />
      <path
        fill='#fff'
        d='M92.09 58.88H35.92a4.18 4.18 0 0 0 0 8.36h56.17a4.18 4.18 0 1 0 0-8.36M92.09 77.38H35.92a4.18 4.18 0 0 0 0 8.36h56.17a4.18 4.18 0 1 0 0-8.36M92.09 95.89H35.92a4.18 4.18 0 0 0 0 8.36h56.17a4.18 4.18 0 1 0 0-8.36'
      />
    </g>
    <defs>
      <clipPath id='089eed3a7a0b09058532987f02d24935__a'>
        <path fill='#fff' d='M0 0h128v128H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(DerivLightIcCashierNoAdsIcon);
export default ForwardRef;
