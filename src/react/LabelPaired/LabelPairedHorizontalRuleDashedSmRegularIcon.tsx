import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedHorizontalRuleDashedSmRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 18 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M.25 10.75a.45.45 0 0 1 .438-.437h2.187a.47.47 0 0 1 .438.437.45.45 0 0 1-.438.438H.688a.432.432 0 0 1-.438-.438m4.813 0a.45.45 0 0 1 .437-.437h2.188a.47.47 0 0 1 .437.437.45.45 0 0 1-.437.438H5.5a.432.432 0 0 1-.437-.438m4.812 0a.45.45 0 0 1 .438-.437H12.5a.47.47 0 0 1 .438.437.45.45 0 0 1-.438.438h-2.187a.432.432 0 0 1-.438-.438m4.813 0a.45.45 0 0 1 .437-.437h2.188a.47.47 0 0 1 .437.437.45.45 0 0 1-.437.438h-2.188a.432.432 0 0 1-.437-.438'
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
