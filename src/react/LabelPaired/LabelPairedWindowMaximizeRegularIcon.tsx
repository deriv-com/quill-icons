import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedWindowMaximizeRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2 6a.973.973 0 0 0-.719.281A.973.973 0 0 0 1 7v3h14V7a.974.974 0 0 0-.281-.719A.974.974 0 0 0 14 6zm-1 5v6c0 .292.094.531.281.719A.974.974 0 0 0 2 18h12a.974.974 0 0 0 .719-.281A.974.974 0 0 0 15 17v-6zM0 7c.02-.562.219-1.031.594-1.406S1.438 5.02 2 5h12c.563.02 1.031.219 1.406.594S15.98 6.437 16 7v10c-.02.563-.219 1.031-.594 1.406S14.562 18.98 14 19H2c-.562-.02-1.031-.219-1.406-.594S.02 17.563 0 17z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWindowMaximizeRegularIcon);
export default ForwardRef;
