import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedChartLineSmRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 14 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M.875 5.063v9.625c.018.364.146.674.383.93.255.236.565.364.93.382h11.375c.273.018.419.164.437.438-.018.273-.164.419-.437.437H2.188c-.62-.018-1.14-.228-1.56-.629-.4-.42-.61-.939-.628-1.558V5.063c.018-.274.164-.42.438-.438.273.018.419.164.437.438m12.113 2.925-3.937 3.938c-.2.182-.401.182-.602 0L6.125 9.629l-2.762 2.734c-.2.183-.4.183-.601 0-.183-.2-.183-.4 0-.601l3.062-3.063c.2-.182.401-.182.602 0l2.324 2.297 3.637-3.61c.2-.182.4-.182.601 0 .183.201.183.402 0 .602'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartLineSmRegularIcon);
export default ForwardRef;
