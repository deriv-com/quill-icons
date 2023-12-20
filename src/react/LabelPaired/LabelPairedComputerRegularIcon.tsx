import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedComputerRegularIcon = (
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
        d='M12 6H2a.973.973 0 0 0-.719.281A.973.973 0 0 0 1 7v7c0 .292.094.531.281.719A.974.974 0 0 0 2 15h10a.974.974 0 0 0 .719-.281A.974.974 0 0 0 13 14V7a.974.974 0 0 0-.281-.719A.974.974 0 0 0 12 6M2 16c-.562-.02-1.031-.219-1.406-.594S.02 14.562 0 14V7c.02-.562.219-1.031.594-1.406S1.438 5.02 2 5h10c.563.02 1.031.219 1.406.594S13.98 6.437 14 7v7c-.02.563-.219 1.031-.594 1.406S12.562 15.98 12 16H8.938l.687 2H11.5c.313.02.48.188.5.5-.02.313-.187.48-.5.5h-9c-.312-.02-.48-.187-.5-.5.02-.312.188-.48.5-.5h1.906l.657-2zm3.438 2h3.125l-.688-2h-1.75zM16.5 6c-.312.02-.48.188-.5.5V8h3V6.5c-.02-.312-.187-.48-.5-.5zM16 9v1h3V9zm0 8.5c.02.313.188.48.5.5h2c.313-.02.48-.187.5-.5V11h-3zm-1-11c.02-.417.167-.77.438-1.062A1.63 1.63 0 0 1 16.5 5h2c.417.02.77.167 1.063.438.27.291.416.645.437 1.062v11a1.63 1.63 0 0 1-.437 1.063A1.63 1.63 0 0 1 18.5 19h-2a1.63 1.63 0 0 1-1.062-.437A1.63 1.63 0 0 1 15 17.5zm2.5 8.75c-.458-.042-.708-.292-.75-.75.042-.458.292-.708.75-.75.458.042.708.292.75.75-.042.458-.292.708-.75.75'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedComputerRegularIcon);
export default ForwardRef;
