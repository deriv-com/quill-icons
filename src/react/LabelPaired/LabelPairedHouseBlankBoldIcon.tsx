import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedHouseBlankBoldIcon = (
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
        d='m9.5 4.188 8.25 7c.313.312.333.666.063 1.062-.313.313-.657.333-1.032.063L16 11.687V17.5c-.02.708-.26 1.302-.719 1.781-.479.459-1.073.698-1.781.719h-9c-.708-.02-1.302-.26-1.781-.719C2.26 18.802 2.02 18.208 2 17.5v-5.812l-.781.624c-.375.271-.719.25-1.031-.062-.271-.396-.25-.75.062-1.062l8.25-7c.333-.25.667-.25 1 0m5 6.218L9 5.75l-5.5 4.656V17.5c0 .292.094.531.281.719a.974.974 0 0 0 .719.281h9a.974.974 0 0 0 .719-.281.974.974 0 0 0 .281-.719z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHouseBlankBoldIcon);
export default ForwardRef;
