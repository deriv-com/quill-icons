import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedForwardStepXlFillIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 15 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2.484 26.672c-.5.375-1.046.437-1.64.187C.313 26.58.03 26.125 0 25.5v-15c.031-.625.313-1.078.844-1.36.594-.25 1.14-.187 1.64.188l9 7.5.516.469V10.5c0-.437.14-.797.422-1.078.281-.281.64-.422 1.078-.422.438 0 .797.14 1.078.422.281.281.422.64.422 1.078v15c0 .438-.14.797-.422 1.078-.281.281-.64.422-1.078.422-.437 0-.797-.14-1.078-.422-.281-.281-.422-.64-.422-1.078v-6.797l-.516.469z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardStepXlFillIcon);
export default ForwardRef;
