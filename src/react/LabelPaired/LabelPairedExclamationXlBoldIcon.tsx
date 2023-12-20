import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedExclamationXlBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 3 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2.625 8.625v13.5c-.062.688-.437 1.063-1.125 1.125-.687-.062-1.062-.437-1.125-1.125v-13.5C.438 7.938.813 7.563 1.5 7.5c.688.063 1.063.438 1.125 1.125M1.5 28.5c-.437 0-.797-.14-1.078-.422C.14 27.797 0 27.438 0 27c0-.437.14-.797.422-1.078.281-.281.64-.422 1.078-.422.438 0 .797.14 1.078.422.281.281.422.64.422 1.078 0 .438-.14.797-.422 1.078-.281.281-.64.422-1.078.422'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h3v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExclamationXlBoldIcon);
export default ForwardRef;
