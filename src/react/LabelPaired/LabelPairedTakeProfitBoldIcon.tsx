import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedTakeProfitBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M7.031 9.438v6.75H5.188v-6.75h-2.25V7.812H9.28v1.625zm3.5 6.75V7.813H14.5c.375 0 .75.093 1.063.218.312.125.562.313.78.531.22.25.407.532.532.876a3.788 3.788 0 0 1 0 2.156 2.295 2.295 0 0 1-.531.844 2.946 2.946 0 0 1-.782.562 2.803 2.803 0 0 1-1.062.188h-2.125v3zm1.844-4.594h1.906c.281 0 .5-.063.625-.219.188-.125.25-.344.25-.625v-.5c0-.281-.062-.5-.25-.625-.125-.156-.344-.219-.625-.219h-1.906z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTakeProfitBoldIcon);
export default ForwardRef;
