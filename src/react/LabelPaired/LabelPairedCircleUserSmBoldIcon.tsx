import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleUserSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M11.102 14.688a5.63 5.63 0 0 0 1.585-3.938c0-3.117-2.57-5.687-5.687-5.687-3.145 0-5.687 2.57-5.687 5.687 0 1.531.574 2.926 1.558 3.938A3.5 3.5 0 0 1 6.125 12.5h1.75c1.45 0 2.707.902 3.227 2.188m-1.094.902a2.194 2.194 0 0 0-2.133-1.777h-1.75a2.2 2.2 0 0 0-2.16 1.777A5.7 5.7 0 0 0 7 16.438c1.094 0 2.133-.301 3.008-.848M7 17.75a6.96 6.96 0 0 1-6.07-3.5c-1.258-2.16-1.258-4.812 0-7A7.02 7.02 0 0 1 7 3.75c2.488 0 4.785 1.34 6.043 3.5 1.258 2.188 1.258 4.84 0 7A6.95 6.95 0 0 1 7 17.75m0-7.437c.383 0 .738-.192.93-.547a1.11 1.11 0 0 0 0-1.094A1.09 1.09 0 0 0 7 8.125c-.41 0-.766.219-.957.547a1.11 1.11 0 0 0 0 1.094c.191.355.547.547.957.547M4.594 9.219c0-.848.437-1.64 1.203-2.078.738-.41 1.64-.41 2.406 0a2.43 2.43 0 0 1 1.203 2.078c0 .875-.465 1.668-1.203 2.105-.765.41-1.668.41-2.406 0-.766-.437-1.203-1.23-1.203-2.105' />
    </g>
    <defs>
      <clipPath id='07b9eca1ce2a6801ff397f2e927dc722__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleUserSmBoldIcon);
export default ForwardRef;
