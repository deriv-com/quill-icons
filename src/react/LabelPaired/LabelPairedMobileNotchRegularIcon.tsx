import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedMobileNotchRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 12 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M8 5v.5a.973.973 0 0 1-.281.719A.973.973 0 0 1 7 6.5H5a.973.973 0 0 1-.719-.281A.973.973 0 0 1 4 5.5V5H3a.973.973 0 0 0-.719.281A.973.973 0 0 0 2 6v12c0 .292.094.531.281.719A.974.974 0 0 0 3 19h6a.974.974 0 0 0 .719-.281A.974.974 0 0 0 10 18V6a.973.973 0 0 0-.281-.719A.973.973 0 0 0 9 5zM7 5H5v.5h2zM1 6c.02-.562.219-1.031.594-1.406S2.437 4.02 3 4h6c.563.02 1.031.219 1.406.594S10.98 5.437 11 6v12c-.02.563-.219 1.031-.594 1.406S9.562 19.98 9 20H3c-.562-.02-1.031-.219-1.406-.594S1.02 18.563 1 18z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileNotchRegularIcon);
export default ForwardRef;
