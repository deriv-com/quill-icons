import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCalendarCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.813 4.063V5h3.375v-.937c0-.305.234-.563.562-.563a.57.57 0 0 1 .563.563V5h.937c.82 0 1.5.68 1.5 1.5V14c0 .844-.68 1.5-1.5 1.5h-7.5A1.48 1.48 0 0 1 .25 14V6.5c0-.82.656-1.5 1.5-1.5h.938v-.937c0-.305.234-.563.562-.563a.57.57 0 0 1 .563.563M1.374 8v6c0 .21.164.375.375.375h7.5A.385.385 0 0 0 9.625 14V8z' />
    </g>
    <defs>
      <clipPath id='8985369a65ac2ab03ff2cc45d0884207__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCalendarCaptionBoldIcon);
export default ForwardRef;
