import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedHorizontalRuleDashedSmRegularIcon = (
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
        d='M.25 10.75a.45.45 0 0 1 .438-.438h2.187a.47.47 0 0 1 .438.438.45.45 0 0 1-.438.438H.687a.432.432 0 0 1-.437-.438Zm4.813 0a.45.45 0 0 1 .437-.438h2.188a.47.47 0 0 1 .437.438.45.45 0 0 1-.438.438H5.5a.432.432 0 0 1-.438-.438Zm4.812 0a.45.45 0 0 1 .438-.438H12.5a.47.47 0 0 1 .438.438.45.45 0 0 1-.438.438h-2.188a.432.432 0 0 1-.437-.438Zm4.813 0a.45.45 0 0 1 .437-.438h2.188a.47.47 0 0 1 .437.438.45.45 0 0 1-.438.438h-2.187a.432.432 0 0 1-.438-.438Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHorizontalRuleDashedSmRegularIcon);
export default ForwardRef;
