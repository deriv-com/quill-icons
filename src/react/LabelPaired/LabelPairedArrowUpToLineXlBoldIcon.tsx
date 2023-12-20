import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowUpToLineXlBoldIcon = (
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
        d='M1.125 7.5h15.75c.688.063 1.063.438 1.125 1.125-.062.688-.437 1.063-1.125 1.125H1.125C.438 9.688.063 9.313 0 8.625.063 7.938.438 7.563 1.125 7.5m8.719 6.375h-.047l6 6.375c.437.531.422 1.047-.047 1.547-.531.437-1.047.422-1.547-.047l-4.078-4.266v9.891c-.062.688-.437 1.063-1.125 1.125-.687-.062-1.062-.437-1.125-1.125v-9.89l-4.078 4.312c-.5.437-1.016.453-1.547.047-.469-.532-.484-1.063-.047-1.594l6-6.375c.219-.25.485-.375.797-.375.313 0 .594.125.844.375'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpToLineXlBoldIcon);
export default ForwardRef;
