import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCashRegisterMdFillIcon = (
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
      <path d='M2 4h7c.531 0 1 .469 1 1v2c0 .563-.469 1-1 1H6.5v1h6.781c.969 0 1.813.75 1.969 1.719l.688 4.656c.03.156.062.313.062.469V18c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2v-2.156c0-.156 0-.313.031-.438L.72 10.72c.156-.969 1-1.719 2-1.719H4.5V8H2c-.562 0-1-.437-1-1V5c0-.531.438-1 1-1m1 1.5c-.281 0-.5.25-.5.5 0 .281.219.5.5.5h5c.25 0 .5-.219.5-.5 0-.25-.25-.5-.5-.5zm-1 12c0 .281.219.5.5.5h11c.25 0 .5-.219.5-.5 0-.25-.25-.5-.5-.5h-11c-.281 0-.5.25-.5.5m1.5-5.25a.74.74 0 0 0 .75-.75.76.76 0 0 0-.75-.75.74.74 0 0 0-.75.75c0 .438.313.75.75.75m3.75-.75a.76.76 0 0 0-.75-.75.74.74 0 0 0-.75.75c0 .438.313.75.75.75a.74.74 0 0 0 .75-.75M5 14.75a.74.74 0 0 0 .75-.75.76.76 0 0 0-.75-.75.74.74 0 0 0-.75.75c0 .438.313.75.75.75m5.25-3.25a.76.76 0 0 0-.75-.75.74.74 0 0 0-.75.75c0 .438.313.75.75.75a.74.74 0 0 0 .75-.75M8 14.75a.74.74 0 0 0 .75-.75.76.76 0 0 0-.75-.75.74.74 0 0 0-.75.75c0 .438.313.75.75.75m5.25-3.25a.76.76 0 0 0-.75-.75.74.74 0 0 0-.75.75c0 .438.313.75.75.75a.74.74 0 0 0 .75-.75M11 14.75a.74.74 0 0 0 .75-.75.76.76 0 0 0-.75-.75.74.74 0 0 0-.75.75c0 .438.313.75.75.75' />
    </g>
    <defs>
      <clipPath id='5f1e99806e60eafc41173a7b2b8d7da4__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCashRegisterMdFillIcon);
export default ForwardRef;
