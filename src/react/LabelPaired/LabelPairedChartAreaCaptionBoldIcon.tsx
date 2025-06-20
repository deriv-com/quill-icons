import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartAreaCaptionBoldIcon = (
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
      <path d='M1.125 4.813v8.25c0 .328.234.562.563.562h9.75a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562h-9.75A1.68 1.68 0 0 1 0 13.063v-8.25c0-.305.234-.563.563-.563a.57.57 0 0 1 .562.563m5.578 3.984L5.25 7.344 3.375 9.219v2.156h6.75V9.547L8.93 8.164l-.657.633a1.103 1.103 0 0 1-1.57 0M7.5 8l.773-.773.141-.141a.76.76 0 0 1 1.102.047l1.453 1.687c.164.211.281.47.281.727v2.203c0 .422-.352.75-.75.75H3a.74.74 0 0 1-.75-.75V9.219c0-.281.117-.586.328-.797l2.133-2.133a.765.765 0 0 1 1.055 0l.937.938z' />
    </g>
    <defs>
      <clipPath id='e5643c240c0680895515763c1fb56f5b__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartAreaCaptionBoldIcon);
export default ForwardRef;
