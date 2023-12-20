import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedBackwardStepXlFillIcon = (
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
        d='m12.563 26.672-9-7.5L3 18.703V25.5c0 .438-.14.797-.422 1.078-.281.281-.64.422-1.078.422-.437 0-.797-.14-1.078-.422C.14 26.297 0 25.938 0 25.5v-15c0-.437.14-.797.422-1.078C.703 9.14 1.062 9 1.5 9c.438 0 .797.14 1.078.422.281.281.422.64.422 1.078v6.797l.563-.469 9-7.5c.468-.375 1-.437 1.593-.187.531.28.813.734.844 1.359v15c-.031.625-.312 1.078-.844 1.36-.594.25-1.125.187-1.594-.188'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardStepXlFillIcon);
export default ForwardRef;
