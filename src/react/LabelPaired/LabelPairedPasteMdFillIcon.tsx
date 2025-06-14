import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPasteMdFillIcon = (
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
      <path d='M5 4a2.01 2.01 0 0 1 1.719 1H8.5c.813 0 1.5.688 1.5 1.5V7H8.5A2.487 2.487 0 0 0 6 9.5V18H1.5A1.48 1.48 0 0 1 0 16.5v-10A1.5 1.5 0 0 1 1.5 5h1.75c.344-.594 1-1 1.75-1m3.5 4h3.875c.375 0 .781.188 1.063.469l2.093 2.094c.281.28.469.687.469 1.062V18.5a1.5 1.5 0 0 1-1.5 1.5h-6A1.48 1.48 0 0 1 7 18.5v-9A1.5 1.5 0 0 1 8.5 8M5 5.25a.74.74 0 0 0-.75.75c0 .438.313.75.75.75A.74.74 0 0 0 5.75 6 .76.76 0 0 0 5 5.25' />
    </g>
    <defs>
      <clipPath id='a541aeda30cefa59d53a374d9fe344c9__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPasteMdFillIcon);
export default ForwardRef;
