import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBankCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.695 3.57a.84.84 0 0 1 .586 0l5.25 2.25c.328.14.516.492.446.844a.73.73 0 0 1-.727.586v.188a.555.555 0 0 1-.562.562H1.313a.54.54 0 0 1-.563-.562V7.25c-.375 0-.68-.234-.75-.586a.76.76 0 0 1 .445-.844zM3 8.75v4.5h.938v-4.5h1.5v4.5h1.125v-4.5h1.5v4.5H9v-4.5h1.477v4.617c.023 0 .046 0 .046.024l1.125.75a.745.745 0 0 1 .305.843.73.73 0 0 1-.703.516H.75a.74.74 0 0 1-.727-.516.745.745 0 0 1 .305-.843l1.125-.75c0-.024.024-.024.047-.024V8.75zM6 5a.755.755 0 0 0-.75.75c0 .422.328.75.75.75.398 0 .75-.328.75-.75A.77.77 0 0 0 6 5' />
    </g>
    <defs>
      <clipPath id='65728480f8cded5377d5ae43e87061e8__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBankCaptionFillIcon);
export default ForwardRef;
