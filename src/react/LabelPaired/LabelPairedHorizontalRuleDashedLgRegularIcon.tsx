import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedHorizontalRuleDashedLgRegularIcon = (
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
        d='M0 15.5c0-.312.273-.625.625-.625H3.75c.313 0 .625.313.625.625a.642.642 0 0 1-.625.625H.625A.617.617 0 0 1 0 15.5m6.875 0c0-.312.273-.625.625-.625h3.125c.313 0 .625.313.625.625a.642.642 0 0 1-.625.625H7.5a.617.617 0 0 1-.625-.625m6.875 0c0-.312.273-.625.625-.625H17.5c.313 0 .625.313.625.625a.642.642 0 0 1-.625.625h-3.125a.617.617 0 0 1-.625-.625m6.875 0c0-.312.273-.625.625-.625h3.125c.313 0 .625.313.625.625a.642.642 0 0 1-.625.625H21.25a.617.617 0 0 1-.625-.625'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHorizontalRuleDashedLgRegularIcon);
export default ForwardRef;
