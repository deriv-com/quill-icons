import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedPersonChalkboardBoldIcon = (
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
        d='M6 7c-.562-.02-1-.27-1.312-.75-.25-.5-.25-1 0-1.5C5 4.27 5.438 4.02 6 4c.563.02 1 .27 1.313.75.25.5.25 1 0 1.5C7 6.73 6.563 6.98 6 7m-.437 2.5H5.5v4h1v-4zM5.5 19.25c-.042.458-.292.708-.75.75-.458-.042-.708-.292-.75-.75V11l-1.344 2.375c-.27.375-.614.469-1.031.281-.375-.27-.469-.614-.281-1.031l1.844-3.219c.25-.437.583-.781 1-1.031.416-.25.875-.375 1.375-.375H10V5.5c.02-.417.167-.77.438-1.062A1.63 1.63 0 0 1 11.5 4h7c.417.02.77.167 1.063.438.27.291.416.645.437 1.062v7a1.63 1.63 0 0 1-.437 1.063A1.63 1.63 0 0 1 18.5 14h-7a1.63 1.63 0 0 1-1.062-.437A1.63 1.63 0 0 1 10 12.5V11h1.5v1.5h7v-7h-7V8h.75c.458.042.708.292.75.75-.042.458-.292.708-.75.75H8v9.75c-.042.458-.292.708-.75.75-.458-.042-.708-.292-.75-.75V15h-1z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPersonChalkboardBoldIcon);
export default ForwardRef;
