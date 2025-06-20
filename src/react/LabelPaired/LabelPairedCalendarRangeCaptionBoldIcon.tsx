import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCalendarRangeCaptionBoldIcon = (
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
      <path d='M3.813 4.063V5h3.375v-.937c0-.305.234-.563.562-.563a.57.57 0 0 1 .563.563V5h.937c.82 0 1.5.68 1.5 1.5V14c0 .844-.68 1.5-1.5 1.5h-7.5A1.48 1.48 0 0 1 .25 14V6.5c0-.82.656-1.5 1.5-1.5h.938v-.937c0-.305.234-.563.562-.563a.57.57 0 0 1 .563.563M1.374 8v6c0 .21.164.375.375.375h7.5A.385.385 0 0 0 9.625 14V8zM2.5 10.25c0-.398.328-.75.75-.75.398 0 .75.352.75.75 0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75m5.25 1.5c.398 0 .75.352.75.75 0 .422-.352.75-.75.75A.74.74 0 0 1 7 12.5c0-.398.328-.75.75-.75m-3-1.5c0-.305.234-.562.563-.562h2.625a.57.57 0 0 1 .562.562.555.555 0 0 1-.562.563H5.313a.54.54 0 0 1-.563-.563m.938 1.688a.57.57 0 0 1 .562.562.555.555 0 0 1-.562.563H3.063A.54.54 0 0 1 2.5 12.5c0-.305.234-.562.563-.562z' />
    </g>
    <defs>
      <clipPath id='1b6d28469c37d1bc724b706c443598e1__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCalendarRangeCaptionBoldIcon);
export default ForwardRef;
