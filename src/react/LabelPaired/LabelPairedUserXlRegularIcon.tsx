import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedUserXlRegularIcon = (
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
        d='M15 12c0-.812-.203-1.562-.61-2.25A4.51 4.51 0 0 0 10.5 7.5a4.51 4.51 0 0 0-3.89 2.25A4.343 4.343 0 0 0 6 12c0 .813.203 1.563.61 2.25a4.51 4.51 0 0 0 3.89 2.25 4.51 4.51 0 0 0 3.89-2.25c.407-.687.61-1.437.61-2.25M4.5 12c0-1.094.266-2.094.797-3A6.2 6.2 0 0 1 7.5 6.797a5.99 5.99 0 0 1 3-.797 5.99 5.99 0 0 1 3 .797A6.2 6.2 0 0 1 15.703 9c.531.906.797 1.906.797 3a5.823 5.823 0 0 1-.797 3 6.2 6.2 0 0 1-2.203 2.203 5.989 5.989 0 0 1-3 .797 5.989 5.989 0 0 1-3-.797A6.2 6.2 0 0 1 5.297 15a5.823 5.823 0 0 1-.797-3m-3 16.5h18c-.062-1.906-.75-3.5-2.062-4.781-1.282-1.25-2.875-1.907-4.782-1.969H8.344c-1.906.063-3.5.719-4.781 1.969C2.25 25 1.563 26.594 1.5 28.5m-1.5.094c.063-2.344.875-4.313 2.438-5.907C4.03 21.126 6 20.313 8.343 20.25h4.312c2.344.063 4.313.875 5.906 2.438 1.563 1.593 2.375 3.562 2.438 5.906 0 .406-.14.734-.422.984-.25.281-.578.422-.984.422H1.406c-.406 0-.734-.14-.984-.422C.14 29.328 0 29 0 28.594'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUserXlRegularIcon);
export default ForwardRef;
