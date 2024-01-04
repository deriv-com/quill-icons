import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChartOhlcSmRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M9 3.75a.47.47 0 0 1 .438.438V5.5h1.312a.47.47 0 0 1 .438.438.45.45 0 0 1-.438.437H9.437v9.188A.45.45 0 0 1 9 16a.432.432 0 0 1-.438-.438V14.25H7.25a.432.432 0 0 1-.438-.438.45.45 0 0 1 .438-.437h1.313V4.187A.45.45 0 0 1 9 3.75Zm5.688 1.75a.47.47 0 0 1 .437.438v5.687h1.313a.47.47 0 0 1 .437.438.45.45 0 0 1-.438.437h-1.312v1.313a.45.45 0 0 1-.438.437.432.432 0 0 1-.437-.438V8.125h-1.313a.432.432 0 0 1-.437-.438.45.45 0 0 1 .438-.437h1.312V5.937a.45.45 0 0 1 .438-.437ZM3.312 9a.47.47 0 0 1 .438.438v5.687h1.313a.47.47 0 0 1 .437.438.45.45 0 0 1-.438.437H3.75v1.313a.45.45 0 0 1-.438.437.432.432 0 0 1-.437-.438v-5.687H1.562a.432.432 0 0 1-.437-.438.45.45 0 0 1 .438-.437h1.312V9.437A.45.45 0 0 1 3.313 9Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartOhlcSmRegularIcon);
export default ForwardRef;
