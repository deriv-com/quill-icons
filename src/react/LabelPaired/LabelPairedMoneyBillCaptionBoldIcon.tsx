import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMoneyBillCaptionBoldIcon = (
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
      <path d='M2.875 6.125c0 .844-.68 1.5-1.5 1.5v3.75c.82 0 1.5.68 1.5 1.5h8.25c0-.82.656-1.5 1.5-1.5v-3.75a1.48 1.48 0 0 1-1.5-1.5zM.25 6.5c0-.82.656-1.5 1.5-1.5h10.5c.82 0 1.5.68 1.5 1.5v6c0 .844-.68 1.5-1.5 1.5H1.75a1.48 1.48 0 0 1-1.5-1.5zM7 7.25c.797 0 1.523.445 1.945 1.125.399.703.399 1.57 0 2.25-.422.703-1.148 1.125-1.945 1.125-.82 0-1.547-.422-1.969-1.125a2.27 2.27 0 0 1 0-2.25C5.453 7.695 6.18 7.25 7 7.25' />
    </g>
    <defs>
      <clipPath id='ebd576605370cf6246b86c8724896f05__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMoneyBillCaptionBoldIcon);
export default ForwardRef;
