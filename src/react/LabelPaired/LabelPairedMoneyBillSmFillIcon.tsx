import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMoneyBillSmFillIcon = (
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
      <path d='M1.875 5.5h12.25c.957 0 1.75.793 1.75 1.75v7c0 .984-.793 1.75-1.75 1.75H1.875c-.984 0-1.75-.766-1.75-1.75v-7c0-.957.766-1.75 1.75-1.75m1.75 8.75c0-.957-.793-1.75-1.75-1.75v1.75zM1.875 9c.957 0 1.75-.766 1.75-1.75h-1.75zm10.5 5.25h1.75V12.5c-.984 0-1.75.793-1.75 1.75M14.125 9V7.25h-1.75c0 .984.766 1.75 1.75 1.75M8 8.125c-.957 0-1.805.52-2.297 1.313a2.65 2.65 0 0 0 0 2.624A2.65 2.65 0 0 0 8 13.376c.93 0 1.777-.492 2.27-1.312a2.64 2.64 0 0 0 0-2.626C9.777 8.646 8.93 8.126 8 8.126' />
    </g>
    <defs>
      <clipPath id='3848f9d6b91a3d4500a6d7cc7b67c5af__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMoneyBillSmFillIcon);
export default ForwardRef;
