import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCashRegisterMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2 4h7c.531 0 1 .469 1 1v2c0 .563-.469 1-1 1H6.5v1h6.75c1 0 1.844.75 1.969 1.719l.75 5.156c0 .094.031.188.031.281V18c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2v-2.125l.75-5.156A1.99 1.99 0 0 1 2.719 9H4.5V8H2c-.562 0-1-.437-1-1V5c0-.531.438-1 1-1m1 1.5c-.281 0-.5.25-.5.5 0 .281.219.5.5.5h5c.25 0 .5-.219.5-.5 0-.25-.25-.5-.5-.5zM1.5 18c0 .281.219.5.5.5h12c.25 0 .5-.219.5-.5v-.5h-13zm12.25-7.062a.505.505 0 0 0-.5-.438H2.719a.505.505 0 0 0-.5.438L1.5 16h12.969zM3.5 11.25a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75m2.25.75a.74.74 0 0 1 .75-.75.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75M5 13.75a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75M8.75 12a.74.74 0 0 1 .75-.75.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75M8 13.75a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75M11.75 12a.74.74 0 0 1 .75-.75.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75M11 13.75a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75' />
    </g>
    <defs>
      <clipPath id='47170797d305b22f7548da413efdd364__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCashRegisterMdBoldIcon);
export default ForwardRef;
