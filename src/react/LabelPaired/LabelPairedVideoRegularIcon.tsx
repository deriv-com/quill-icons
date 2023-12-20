import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedVideoRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 18 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2 7a.973.973 0 0 0-.719.281A.973.973 0 0 0 1 8v8c0 .292.094.531.281.719A.974.974 0 0 0 2 17h8a.974.974 0 0 0 .719-.281A.974.974 0 0 0 11 16V8a.974.974 0 0 0-.281-.719A.974.974 0 0 0 10 7zM0 8c.02-.562.219-1.031.594-1.406S1.438 6.02 2 6h8c.563.02 1.031.219 1.406.594S11.98 7.437 12 8v8c-.02.563-.219 1.031-.594 1.406S10.562 17.98 10 18H2c-.562-.02-1.031-.219-1.406-.594S.02 16.563 0 16zm16.219 8.844L13 15.062v-1.124l3.719 2.03c.02.022.052.032.093.032.105 0 .167-.062.188-.187V8.186A.22.22 0 0 0 16.813 8c-.042 0-.073.01-.094.031L13 10.062V8.939l3.219-1.782c.187-.104.385-.156.593-.156.334 0 .615.115.844.344.23.229.344.51.344.843v7.626c0 .333-.115.614-.344.843-.229.23-.51.344-.843.344-.209 0-.407-.052-.594-.156'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedVideoRegularIcon);
export default ForwardRef;
