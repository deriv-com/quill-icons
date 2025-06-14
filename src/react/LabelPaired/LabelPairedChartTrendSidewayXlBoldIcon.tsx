import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartTrendSidewayXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.375 18c0-.61.469-1.125 1.125-1.125h27c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125h-27C.844 19.125.375 18.656.375 18' />
    </g>
    <defs>
      <clipPath id='cd2e3454876e968fae986305eea1499b__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartTrendSidewayXlBoldIcon);
export default ForwardRef;
