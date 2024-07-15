import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMoneyBillSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.188 6.813c0 .984-.793 1.75-1.75 1.75v4.374c.957 0 1.75.793 1.75 1.75h9.625c0-.957.765-1.75 1.75-1.75V8.564c-.985 0-1.75-.766-1.75-1.75zM.124 7.25c0-.957.766-1.75 1.75-1.75h12.25c.957 0 1.75.793 1.75 1.75v7c0 .984-.793 1.75-1.75 1.75H1.875c-.984 0-1.75-.766-1.75-1.75zM8 8.125c.93 0 1.777.52 2.27 1.313.464.82.464 1.832 0 2.624-.493.82-1.34 1.313-2.27 1.313a2.65 2.65 0 0 1-2.297-1.312 2.65 2.65 0 0 1 0-2.626C6.195 8.646 7.043 8.126 8 8.126' />
    </g>
    <defs>
      <clipPath id='7e1ede6c1cefe8289289916e29dffeda__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMoneyBillSmBoldIcon);
export default ForwardRef;
