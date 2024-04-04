import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedVideoSmFillIcon = (
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
      <path d='M.125 7.25c0-.957.766-1.75 1.75-1.75h7c.957 0 1.75.793 1.75 1.75v7c0 .984-.793 1.75-1.75 1.75h-7c-.984 0-1.75-.766-1.75-1.75zm15.285-.766c.274.164.465.465.465.766v7a.94.94 0 0 1-.465.793c-.3.137-.629.137-.902-.055l-2.625-1.75-.383-.246V8.535l.383-.246 2.625-1.75c.273-.191.601-.191.902-.055' />
    </g>
    <defs>
      <clipPath id='dc4f880217a8727aca3b61cd53cc3e64__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedVideoSmFillIcon);
export default ForwardRef;
