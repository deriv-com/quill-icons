import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedFileCircleInfoBoldIcon = (
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
        d='M2 18.5h6.906a5.25 5.25 0 0 0 1.406 1.469c-.104.02-.208.031-.312.031H2c-.562-.02-1.031-.219-1.406-.594S.02 18.563 0 18V6c.02-.562.219-1.031.594-1.406S1.438 4.02 2 4h5.188c.541 0 1.01.198 1.406.594l2.812 2.812c.396.396.594.875.594 1.438v1.375a5.378 5.378 0 0 0-1.5.656V9H8a.973.973 0 0 1-.719-.281A.973.973 0 0 1 7 8V5.5H2c-.312.02-.48.188-.5.5v12c.02.313.188.48.5.5M13.5 11a4.43 4.43 0 0 1 2.25.594 4.51 4.51 0 0 1 1.656 1.656c.396.708.594 1.458.594 2.25s-.198 1.542-.594 2.25a4.51 4.51 0 0 1-1.656 1.656A4.43 4.43 0 0 1 13.5 20a4.43 4.43 0 0 1-2.25-.594 4.51 4.51 0 0 1-1.656-1.656A4.543 4.543 0 0 1 9 15.5c0-.792.198-1.542.594-2.25a4.51 4.51 0 0 1 1.656-1.656A4.43 4.43 0 0 1 13.5 11m0 3c.458-.042.708-.292.75-.75-.042-.458-.292-.708-.75-.75-.458.042-.708.292-.75.75.042.458.292.708.75.75m-1 1.5c.02.313.188.48.5.5v1.5c-.312.02-.48.188-.5.5.02.313.188.48.5.5h1c.313-.02.48-.187.5-.5-.02-.312-.187-.48-.5-.5v-2c-.02-.312-.187-.48-.5-.5H13c-.312.02-.48.188-.5.5'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCircleInfoBoldIcon);
export default ForwardRef;
