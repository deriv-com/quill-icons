import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEllipsisVerticalCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={3}
    height={18}
    viewBox='0 0 3 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.5 12.125q.633.023.984.563.282.562 0 1.124-.351.54-.984.563a1.17 1.17 0 0 1-.984-.562 1.2 1.2 0 0 1 0-1.126q.351-.538.984-.562m0-3.75q.633.024.984.563.282.562 0 1.124-.351.54-.984.563a1.17 1.17 0 0 1-.984-.562 1.2 1.2 0 0 1 0-1.126q.351-.538.984-.562M2.625 5.75q-.024.633-.562.984-.563.282-1.126 0a1.17 1.17 0 0 1-.562-.984q.024-.633.563-.984.563-.282 1.125 0 .538.351.562.984' />
    </g>
    <defs>
      <clipPath id='591e49a6e8f2c67413207ac05a7f885c__a'>
        <path d='M0 0h3v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEllipsisVerticalCaptionBoldIcon);
export default ForwardRef;
