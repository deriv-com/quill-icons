import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const PaymentMethodJcbBrandIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 128 80'
    role='img'
    ref={ref}
    {...props}
  >
    <path fill='#C4C4C4' d='M76.8 24a8 8 0 0 1 8-8H96v40a8 8 0 0 1-8 8H76.8z' />
    <path fill='url(#a)' d='M76.8 24a8 8 0 0 1 8-8H96v40a8 8 0 0 1-8 8H76.8z' />
    <path fill='url(#b)' d='M54.4 24a8 8 0 0 1 8-8h11.2v40a8 8 0 0 1-8 8H54.4z' />
    <path fill='#C4C4C4' d='M32 24a8 8 0 0 1 8-8h11.2v40a8 8 0 0 1-8 8H32z' />
    <path fill='url(#c)' d='M32 24a8 8 0 0 1 8-8h11.2v40a8 8 0 0 1-8 8H32z' />
    <g fill='#fff'>
      <path d='M54.4 35.39c2.023-1.716 5.542-2.815 11.216-2.551 3.035.132 6.29.968 6.29.968v3.386c-1.628-.835-3.563-1.583-6.07-1.759-4.31-.308-6.906 1.803-6.906 5.498 0 3.74 2.595 5.85 6.906 5.499 2.507-.176 4.442-.968 6.07-1.76v3.387s-3.211.836-6.29.968c-5.674.264-9.193-.836-11.216-2.55z' />
      <path
        fillRule='evenodd'
        d='M76.8 33.118v15.395h12.41c2.904 0 5.103-1.583 5.103-4.003 0-2.243-1.98-3.694-4.575-3.87v-.088c2.376-.308 3.651-1.848 3.651-3.651 0-2.288-1.891-3.607-4.442-3.74a3.657 3.657 0 0 0-.64-.043zm3.965 12.844h4.619c.066 0 .176-.011.286-.022h.002c.11-.011.218-.022.284-.022.88-.176 1.627-.968 1.627-2.067 0-1.056-.748-1.848-1.627-2.068-.132-.044-.396-.044-.572-.044h-4.619zm6.246-8.533c0-1.056-.748-1.76-1.627-1.892-.04 0-.106-.009-.179-.018a2.217 2.217 0 0 0-.261-.026h-4.179v3.871h4.179c.132 0 .396 0 .44-.044.88-.132 1.627-.836 1.627-1.891'
        clipRule='evenodd'
      />
      <path d='M38.903 46.084c-2.33 0-4.66-.704-6.903-1.803v3.355c.434.116 3.865.999 8.179.999 7.61 0 9.853-2.947 9.853-6.554V32.8H43.17v9.325c0 2.287-1.495 3.959-4.267 3.959' />
    </g>
    <defs>
      <linearGradient
        id='a'
        x1={76.834}
        x2={96.051}
        y1={36.628}
        y2={36.628}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#007940' />
        <stop offset={0.229} stopColor='#00873F' />
        <stop offset={0.743} stopColor='#40A737' />
        <stop offset={1} stopColor='#5CB531' />
      </linearGradient>
      <linearGradient
        id='b'
        x1={54.289}
        x2={73.241}
        y1={39.958}
        y2={39.958}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#6C2C2F' />
        <stop offset={0.173} stopColor='#882730' />
        <stop offset={0.573} stopColor='#BE1833' />
        <stop offset={0.859} stopColor='#DC0436' />
        <stop offset={1} stopColor='#E60039' />
      </linearGradient>
      <linearGradient
        id='c'
        x1={32.033}
        x2={51.547}
        y1={40.002}
        y2={40.002}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#1F286F' />
        <stop offset={0.475} stopColor='#004E94' />
        <stop offset={0.826} stopColor='#0066B1' />
        <stop offset={1} stopColor='#006FBC' />
      </linearGradient>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(PaymentMethodJcbBrandIcon);
export default ForwardRef;
