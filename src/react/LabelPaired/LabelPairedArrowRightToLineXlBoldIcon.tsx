import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowRightToLineXlBoldIcon = (
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
        d='M21 10.125v15.75c-.062.688-.437 1.063-1.125 1.125-.687-.062-1.062-.437-1.125-1.125v-15.75c.063-.687.438-1.062 1.125-1.125.688.063 1.063.438 1.125 1.125m-6.375 8.719.047-.047-6.375 6c-.563.437-1.094.422-1.594-.047-.437-.531-.422-1.047.047-1.547l4.313-4.078H1.124C.438 19.063.063 18.688 0 18c.063-.687.438-1.062 1.125-1.125h9.938L6.75 12.797c-.469-.5-.484-1.016-.047-1.547.5-.469 1.016-.484 1.547-.047l6.375 6c.25.219.375.485.375.797 0 .313-.125.594-.375.844'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightToLineXlBoldIcon);
export default ForwardRef;
