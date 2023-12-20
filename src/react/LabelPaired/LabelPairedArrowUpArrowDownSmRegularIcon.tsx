import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowUpArrowDownSmRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m4.8 4.762 2.626 2.625c.182.2.182.4 0 .601-.2.183-.401.183-.602 0l-1.886-1.86v10.31c-.019.273-.165.419-.438.437-.273-.018-.42-.164-.437-.437V6.127l-1.887 1.86c-.2.183-.401.183-.602 0-.182-.2-.182-.4 0-.601L4.2 4.762c.2-.183.401-.183.602 0m9.626 9.351L11.8 16.738c-.2.183-.401.183-.602 0l-2.625-2.625c-.182-.2-.182-.4 0-.601.2-.183.401-.183.602 0l1.886 1.86V5.061c.019-.273.165-.419.438-.437.273.018.42.164.438.438V15.37l1.886-1.86c.2-.182.401-.182.602 0 .182.201.182.402 0 .602'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpArrowDownSmRegularIcon);
export default ForwardRef;
