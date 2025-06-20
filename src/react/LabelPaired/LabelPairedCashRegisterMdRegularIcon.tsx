import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCashRegisterMdRegularIcon = (
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
      <path d='M8.5 5h-6c-.281 0-.5.25-.5.5v1c0 .281.219.5.5.5h6c.25 0 .5-.219.5-.5v-1c0-.25-.25-.5-.5-.5m-6-1h6c.813 0 1.5.688 1.5 1.5v1A1.5 1.5 0 0 1 8.5 8H6v1h7.25c1 0 1.844.75 1.969 1.719l.75 5.156c0 .094.031.188.031.281V18c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2v-2.125l.75-5.156A1.99 1.99 0 0 1 2.719 9H5V8H2.5A1.48 1.48 0 0 1 1 6.5v-1A1.5 1.5 0 0 1 2.5 4M1 18c0 .563.438 1 1 1h12c.531 0 1-.437 1-1v-1H1zm13.25-7.125c-.094-.5-.5-.875-1-.875H2.719c-.5 0-.906.375-1 .875L1 16h13.969zM3.5 11.25a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75m2.25.75a.74.74 0 0 1 .75-.75.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75M5 13.75a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75M8.75 12a.74.74 0 0 1 .75-.75.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75M8 13.75a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75M11.75 12a.74.74 0 0 1 .75-.75.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75M11 13.75a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75' />
    </g>
    <defs>
      <clipPath id='478462be8e769361cf23dcc49e4eebc3__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCashRegisterMdRegularIcon);
export default ForwardRef;
