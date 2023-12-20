import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedRectangleBarcodeRegularIcon = (
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
        d='M2 6a.973.973 0 0 0-.719.281A.973.973 0 0 0 1 7v10c0 .292.094.531.281.719A.974.974 0 0 0 2 18h14a.974.974 0 0 0 .719-.281A.974.974 0 0 0 17 17V7a.974.974 0 0 0-.281-.719A.974.974 0 0 0 16 6zM0 7c.02-.562.219-1.031.594-1.406S1.438 5.02 2 5h14c.563.02 1.031.219 1.406.594S17.98 6.437 18 7v10c-.02.563-.219 1.031-.594 1.406S16.563 18.98 16 19H2c-.562-.02-1.031-.219-1.406-.594S.02 17.563 0 17zm3 1.5c.02-.312.188-.48.5-.5.313.02.48.188.5.5v7c-.02.313-.187.48-.5.5-.312-.02-.48-.187-.5-.5zm9 0c.02-.312.188-.48.5-.5.313.02.48.188.5.5v7c-.02.313-.187.48-.5.5-.312-.02-.48-.187-.5-.5zm2.5-.5c.313.02.48.188.5.5v7c-.02.313-.187.48-.5.5-.312-.02-.48-.187-.5-.5v-7c.02-.312.188-.48.5-.5M5 8.5c.02-.312.188-.48.5-.5.313.02.48.188.5.5v7c-.02.313-.187.48-.5.5-.312-.02-.48-.187-.5-.5zM7.5 8c.313.02.48.188.5.5v7c-.02.313-.187.48-.5.5-.312-.02-.48-.187-.5-.5v-7c.02-.312.188-.48.5-.5m2 .5c.02-.312.188-.48.5-.5.313.02.48.188.5.5v7c-.02.313-.187.48-.5.5-.312-.02-.48-.187-.5-.5z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRectangleBarcodeRegularIcon);
export default ForwardRef;
