import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartLineSmRegularIcon = (
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
      <path d='M.875 5.063v9.625c0 .738.574 1.312 1.313 1.312h11.375a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437H2.188A2.16 2.16 0 0 1 0 14.688V5.063a.45.45 0 0 1 .438-.438.47.47 0 0 1 .437.438m12.113 2.953-3.937 3.937a.463.463 0 0 1-.63 0L6.126 9.63 3.363 12.39a.463.463 0 0 1-.629 0 .463.463 0 0 1 0-.63L5.797 8.7a.463.463 0 0 1 .629 0l2.324 2.324 3.61-3.636a.463.463 0 0 1 .628 0 .463.463 0 0 1 0 .629' />
    </g>
    <defs>
      <clipPath id='181985b11dab6271edb05c8753b01990__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartLineSmRegularIcon);
export default ForwardRef;
