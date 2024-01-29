import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChartLineSmRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M.875 5.063v9.625q.027.546.383.93.382.355.93.382h11.375q.41.027.437.438-.027.41-.437.437H2.188q-.93-.027-1.56-.629-.6-.63-.628-1.558V5.063q.027-.411.438-.438.41.027.437.438m12.113 2.925-3.937 3.938q-.3.273-.602 0L6.125 9.629l-2.762 2.734q-.3.274-.601 0-.275-.3 0-.601l3.062-3.063q.3-.273.602 0l2.324 2.297 3.637-3.61q.3-.273.601 0 .274.302 0 .602' />
    </g>
    <defs>
      <clipPath id='2eae23a70f27ed72b20ccba305924853__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartLineSmRegularIcon);
export default ForwardRef;
