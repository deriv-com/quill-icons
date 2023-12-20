import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedFileCircleCheckBoldIcon = (
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
        d='M2 18.5h8c.313-.02.48-.187.5-.5V9H8a.973.973 0 0 1-.719-.281A.973.973 0 0 1 7 8V5.5H2c-.312.02-.48.188-.5.5v12c.02.313.188.48.5.5M2 4h5.188c.541 0 1.01.198 1.406.594l2.812 2.812c.396.396.594.875.594 1.438V18c-.02.563-.219 1.031-.594 1.406S10.562 19.98 10 20H2c-.562-.02-1.031-.219-1.406-.594S.02 18.563 0 18V6c.02-.562.219-1.031.594-1.406S1.438 4.02 2 4m7.031 8.375-3.344 3.313a.723.723 0 0 1-.53.218.723.723 0 0 1-.532-.219l-1.656-1.656c-.292-.354-.292-.708 0-1.062.354-.292.708-.292 1.062 0l1.125 1.125 2.813-2.781c.354-.292.708-.292 1.062 0 .292.354.292.708 0 1.062'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCircleCheckBoldIcon);
export default ForwardRef;
