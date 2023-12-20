import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedBarcodeRegularIcon = (
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
        d='M0 5.5c.02-.312.188-.48.5-.5.313.02.48.188.5.5v13c-.02.313-.187.48-.5.5-.312-.02-.48-.187-.5-.5zm2 0c.02-.312.188-.48.5-.5.313.02.48.188.5.5v13c-.02.313-.187.48-.5.5-.312-.02-.48-.187-.5-.5zM4.5 5c.313.02.48.188.5.5v13c-.02.313-.187.48-.5.5-.312-.02-.48-.187-.5-.5v-13c.02-.312.188-.48.5-.5m2.5.5c.02-.312.188-.48.5-.5.313.02.48.188.5.5v13c-.02.313-.187.48-.5.5-.312-.02-.48-.187-.5-.5zM9.5 5c.313.02.48.188.5.5v13c-.02.313-.187.48-.5.5-.312-.02-.48-.187-.5-.5v-13c.02-.312.188-.48.5-.5m2.5.5c.02-.312.188-.48.5-.5.313.02.48.188.5.5v13c-.02.313-.187.48-.5.5-.312-.02-.48-.187-.5-.5zm3.5-.5c.313.02.48.188.5.5v13c-.02.313-.187.48-.5.5-.312-.02-.48-.187-.5-.5v-13c.02-.312.188-.48.5-.5'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarcodeRegularIcon);
export default ForwardRef;
