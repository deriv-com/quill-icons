import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartLineUpDownSmRegularIcon = (
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
      <path d='M.875 5.063v9.625c0 .738.574 1.312 1.313 1.312h11.375a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437H2.188A2.16 2.16 0 0 1 0 14.688V5.063a.45.45 0 0 1 .438-.438.47.47 0 0 1 .437.438m9.188 1.312a.43.43 0 0 1-.438-.437.45.45 0 0 1 .438-.438h2.624a.47.47 0 0 1 .438.438v2.625a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437v-1.56l-4.074 4.075a.463.463 0 0 1-.63 0L5.688 9.191l-2.324 2.325a.463.463 0 0 1-.629 0 .463.463 0 0 1 0-.63L5.36 8.263a.45.45 0 0 1 .329-.137.44.44 0 0 1 .3.137l1.887 1.886 3.746-3.773zm0 7.875a.43.43 0 0 1-.438-.437.45.45 0 0 1 .438-.438h1.558l-1.887-1.86.63-.628 1.886 1.886v-1.585a.45.45 0 0 1 .438-.438.47.47 0 0 1 .437.438v2.624a.45.45 0 0 1-.437.438z' />
    </g>
    <defs>
      <clipPath id='9373e35a24c3afe80f8673a58f98b458__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartLineUpDownSmRegularIcon);
export default ForwardRef;
