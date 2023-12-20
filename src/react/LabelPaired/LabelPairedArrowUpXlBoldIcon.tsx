import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowUpXlBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 18 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M9.797 7.828v.047l7.875 8.25c.437.531.437 1.047 0 1.547-.563.437-1.094.437-1.594 0l-5.953-6.235v15.938c-.062.688-.437 1.063-1.125 1.125-.687-.062-1.062-.437-1.125-1.125V11.438l-5.953 6.187c-.5.469-1.031.484-1.594.047-.437-.5-.437-1.031 0-1.594l7.875-8.25C8.422 7.61 8.688 7.5 9 7.5c.313 0 .578.11.797.328'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpXlBoldIcon);
export default ForwardRef;
