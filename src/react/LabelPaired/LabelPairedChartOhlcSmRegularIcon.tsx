import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartOhlcSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9 3.75a.47.47 0 0 1 .438.438V5.5h1.312a.47.47 0 0 1 .438.438.45.45 0 0 1-.438.437H9.438v9.188A.45.45 0 0 1 9 16a.43.43 0 0 1-.437-.437V14.25H7.25a.43.43 0 0 1-.437-.437.45.45 0 0 1 .437-.438h1.313V4.188A.45.45 0 0 1 9 3.75m5.688 1.75a.47.47 0 0 1 .437.438v5.687h1.313a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437h-1.313v1.313a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437V8.125h-1.312a.43.43 0 0 1-.438-.437.45.45 0 0 1 .438-.438h1.312V5.938a.45.45 0 0 1 .438-.438M3.313 9a.47.47 0 0 1 .437.438v5.687h1.313a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437H3.75v1.313a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437v-5.688H1.563a.43.43 0 0 1-.438-.437.45.45 0 0 1 .438-.438h1.312V9.438A.45.45 0 0 1 3.313 9' />
    </g>
    <defs>
      <clipPath id='4d259947dc85d5a4__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartOhlcSmRegularIcon);
export default ForwardRef;
