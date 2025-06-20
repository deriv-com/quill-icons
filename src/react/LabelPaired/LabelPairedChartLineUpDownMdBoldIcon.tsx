import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartLineUpDownMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.75 5a.76.76 0 0 1 .75.75v11c0 .438.313.75.75.75h13a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75h-13C1 19 0 18 0 16.75v-11A.74.74 0 0 1 .75 5m11 2.5a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75h2.5c.188 0 .375.094.531.219.125.156.219.343.219.531v2.5a.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75v-.687L9.531 12.53c-.312.313-.781.313-1.062 0L6.5 10.562l-1.969 1.97c-.312.312-.781.312-1.062 0a.684.684 0 0 1 0-1.032l2.5-2.5c.281-.312.75-.312 1.062 0L9 10.969 12.438 7.5zm0 8.5a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75h.688l-1.47-1.469 1.063-1.062 1.469 1.469v-.688a.74.74 0 0 1 .75-.75.76.76 0 0 1 .75.75v2.5a.75.75 0 0 1-.219.531.73.73 0 0 1-.531.219z' />
    </g>
    <defs>
      <clipPath id='9c9cfba93dc9f6548464d738c0f5129d__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartLineUpDownMdBoldIcon);
export default ForwardRef;
