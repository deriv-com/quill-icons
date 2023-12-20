import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedFloppyDiskPenBoldIcon = (
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
        d='M1.5 7v10c.02.313.188.48.5.5h6.469L8.094 19H2c-.562-.02-1.031-.219-1.406-.594S.02 17.563 0 17V7c.02-.562.219-1.031.594-1.406S1.438 5.02 2 5h7.688c.541 0 1.01.198 1.406.594l2.312 2.312-1.062 1.063-2.313-2.313L10 6.625V9.75c-.042.458-.292.708-.75.75h-6c-.458-.042-.708-.292-.75-.75V6.5H2c-.312.02-.48.188-.5.5m11.906.906c.396.396.594.875.594 1.438v2.031l-1.5 1.5V9.344a.512.512 0 0 0-.156-.375zM4 6.5V9h4.5V6.5zM5 14c.02-.75.354-1.323 1-1.719.667-.375 1.333-.375 2 0 .646.396.98.969 1 1.719-.02.75-.354 1.323-1 1.719-.667.375-1.333.375-2 0-.646-.396-.98-.969-1-1.719m12.188-2.625.437.438c.25.27.375.562.375.874 0 .334-.125.636-.375.907l-.906.906-2.219-2.219.906-.906c.271-.25.563-.375.875-.375.334 0 .636.125.907.375M9.75 17.031 13.781 13 16 15.219l-4.031 4.031a1.176 1.176 0 0 1-.469.281L9.625 20a.544.544 0 0 1-.469-.156.544.544 0 0 1-.156-.469l.469-1.875c.062-.187.156-.344.281-.469'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFloppyDiskPenBoldIcon);
export default ForwardRef;
