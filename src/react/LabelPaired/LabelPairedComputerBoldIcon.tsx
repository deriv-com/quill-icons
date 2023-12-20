import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedComputerBoldIcon = (
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
        d='M12 6.5H2c-.312.02-.48.188-.5.5v7c.02.313.188.48.5.5h10c.313-.02.48-.187.5-.5V7c-.02-.312-.187-.48-.5-.5M2 16c-.562-.02-1.031-.219-1.406-.594S.02 14.562 0 14V7c.02-.562.219-1.031.594-1.406S1.438 5.02 2 5h10c.563.02 1.031.219 1.406.594S13.98 6.437 14 7v7c-.02.563-.219 1.031-.594 1.406S12.562 15.98 12 16H9.281l.5 1.5h1.469c.458.042.708.292.75.75-.042.458-.292.708-.75.75h-8.5c-.458-.042-.708-.292-.75-.75.042-.458.292-.708.75-.75h1.469l.5-1.5zm3.781 1.5H8.22l-.5-1.5H6.28zM16.5 6.5v1h2v-1zm0 2.5v1h2V9zm2 2.5h-2v6h2zm-3.5-5c.02-.417.167-.77.438-1.062A1.63 1.63 0 0 1 16.5 5h2c.417.02.77.167 1.063.438.27.291.416.645.437 1.062v11a1.63 1.63 0 0 1-.437 1.063A1.63 1.63 0 0 1 18.5 19h-2a1.63 1.63 0 0 1-1.062-.437A1.63 1.63 0 0 1 15 17.5zm2.5 8.75c-.458-.042-.708-.292-.75-.75.042-.458.292-.708.75-.75.458.042.708.292.75.75-.042.458-.292.708-.75.75'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedComputerBoldIcon);
export default ForwardRef;
