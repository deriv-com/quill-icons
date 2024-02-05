import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPercentCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={18}
    viewBox='0 0 9 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m8.648 6.148-7.5 7.5q-.397.33-.796 0-.33-.397 0-.796l7.5-7.5q.397-.33.796 0 .33.397 0 .796M2.625 6.5q-.024.633-.562.984-.563.282-1.126 0A1.17 1.17 0 0 1 .375 6.5q.024-.633.563-.984.563-.282 1.125 0 .538.351.562.984m6 6q-.024.633-.562.984-.563.282-1.126 0a1.17 1.17 0 0 1-.562-.984q.024-.633.563-.984.563-.282 1.125 0 .538.351.562.984' />
    </g>
    <defs>
      <clipPath id='660865a9e8fcbcd71d3d395aaa51362a__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPercentCaptionBoldIcon);
export default ForwardRef;
