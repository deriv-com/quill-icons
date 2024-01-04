import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChartTrendUpLgRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M24.023 6.203c.313.156.43.547.274.86l-3.75 7.5a.623.623 0 0 1-.547.312h-5.898l-4.805 9.688a.641.641 0 0 1-.86.273l-7.5-3.75a.641.641 0 0 1-.273-.86.641.641 0 0 1 .86-.273l6.913 3.477 4.727-9.453c.117-.196.313-.352.586-.352h5.86l3.554-7.148a.641.641 0 0 1 .86-.274Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartTrendUpLgRegularIcon);
export default ForwardRef;
