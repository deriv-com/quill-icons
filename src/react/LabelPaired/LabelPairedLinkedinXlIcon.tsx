import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedLinkedinXlIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 21 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M19.5 7.5c.438 0 .797.14 1.078.422.281.312.422.672.422 1.078v18c0 .406-.14.766-.422 1.078-.281.281-.64.422-1.078.422h-18c-.437 0-.797-.14-1.078-.422A1.564 1.564 0 0 1 0 27V9c0-.406.14-.766.422-1.078.281-.281.64-.422 1.078-.422zm-13.172 18h.047V15.469h-3.14V25.5zM4.781 14.11c.532 0 .953-.172 1.266-.516.344-.344.531-.766.562-1.266-.03-.531-.218-.969-.562-1.312-.313-.344-.734-.516-1.266-.516-.5 0-.922.172-1.265.516-.344.343-.516.78-.516 1.312 0 .5.172.922.516 1.266a1.72 1.72 0 0 0 1.265.515M18 25.5v-5.484c.063-1.375-.156-2.516-.656-3.422-.5-.875-1.516-1.328-3.047-1.36-.781 0-1.422.172-1.922.516-.5.313-.844.672-1.031 1.078h-.047v-1.36h-3V25.5h3.14v-4.969c-.03-.687.063-1.281.282-1.781.25-.5.765-.766 1.547-.797.78.063 1.25.36 1.406.89a4.82 4.82 0 0 1 .234 1.782V25.5z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLinkedinXlIcon);
export default ForwardRef;
