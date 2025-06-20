import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMoneyBillCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={18}
    viewBox='0 0 14 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.75 5h10.5c.82 0 1.5.68 1.5 1.5v6c0 .844-.68 1.5-1.5 1.5H1.75a1.48 1.48 0 0 1-1.5-1.5v-6c0-.82.656-1.5 1.5-1.5m1.5 7.5c0-.82-.68-1.5-1.5-1.5v1.5zM1.75 8c.82 0 1.5-.656 1.5-1.5h-1.5zm9 4.5h1.5V11c-.844 0-1.5.68-1.5 1.5m1.5-4.5V6.5h-1.5c0 .844.656 1.5 1.5 1.5M7 7.25c-.82 0-1.547.445-1.969 1.125a2.27 2.27 0 0 0 0 2.25A2.27 2.27 0 0 0 7 11.75c.797 0 1.523-.422 1.945-1.125a2.27 2.27 0 0 0 0-2.25C8.523 7.695 7.797 7.25 7 7.25' />
    </g>
    <defs>
      <clipPath id='9185c97def0d08519d6d66d5c4d64cc4__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMoneyBillCaptionFillIcon);
export default ForwardRef;
