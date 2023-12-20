import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedLaptopBoldIcon = (
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
        d='M16 6.5H4c-.312.02-.48.188-.5.5v7H2V7c.02-.562.219-1.031.594-1.406S3.438 5.02 4 5h12c.563.02 1.031.219 1.406.594S17.98 6.437 18 7v7h-1.5V7c-.02-.312-.187-.48-.5-.5m-13 11h14c.688-.042 1.156-.375 1.406-1H1.594c.25.625.718.958 1.406 1M0 16c0-.292.094-.531.281-.719A.974.974 0 0 1 1 15h18c.292 0 .531.094.719.281A.974.974 0 0 1 20 16c-.02.854-.312 1.563-.875 2.125-.562.563-1.27.854-2.125.875H3c-.854-.02-1.562-.312-2.125-.875C.313 17.563.021 16.855 0 16'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLaptopBoldIcon);
export default ForwardRef;
