import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartLineSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.75 5.5v9.188c0 .246.191.437.438.437h10.937A.9.9 0 0 1 14 16c0 .492-.41.875-.875.875H2.188A2.16 2.16 0 0 1 0 14.688V5.5c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875m11.102 2.379-3.5 3.5a.843.843 0 0 1-1.23 0L6.561 9.82l-2.46 2.434a.843.843 0 0 1-1.23 0 .843.843 0 0 1 0-1.23L5.933 7.96a.843.843 0 0 1 1.23 0L8.75 9.52l2.871-2.872a.843.843 0 0 1 1.23 0 .843.843 0 0 1 0 1.23' />
    </g>
    <defs>
      <clipPath id='b76f55623f852a8d4cc5ecce1936ce51__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartLineSmFillIcon);
export default ForwardRef;
