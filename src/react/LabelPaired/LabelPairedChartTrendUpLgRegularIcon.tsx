import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedChartTrendUpLgRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 25 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M24.023 6.203c.313.156.43.547.274.86l-3.75 7.5a.623.623 0 0 1-.547.312h-5.898l-4.805 9.688a.641.641 0 0 1-.86.273l-7.5-3.75a.641.641 0 0 1-.273-.86.641.641 0 0 1 .86-.273l6.914 3.477 4.726-9.453c.117-.196.313-.352.586-.352h5.86l3.554-7.148a.641.641 0 0 1 .86-.274'
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
