import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedFloppyDiskRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 14 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1 7v10c0 .292.094.531.281.719A.974.974 0 0 0 2 18h10a.974.974 0 0 0 .719-.281A.974.974 0 0 0 13 17V9.344a.974.974 0 0 0-.281-.719l-2.344-2.344A.852.852 0 0 0 10 6.063V9a.973.973 0 0 1-.281.719A.973.973 0 0 1 9 10H3a.973.973 0 0 1-.719-.281A.973.973 0 0 1 2 9V6a.973.973 0 0 0-.719.281A.973.973 0 0 0 1 7m2-1v3h6V6zM0 7c.02-.562.219-1.031.594-1.406S1.438 5.02 2 5h7.656c.563 0 1.042.198 1.438.594l2.312 2.312c.396.396.594.875.594 1.438V17c-.02.563-.219 1.031-.594 1.406S12.562 18.98 12 19H2c-.562-.02-1.031-.219-1.406-.594S.02 17.563 0 17zm8.5 7c-.02-.562-.27-1-.75-1.312-.5-.25-1-.25-1.5 0-.48.312-.73.75-.75 1.312.02.563.27 1 .75 1.313.5.25 1 .25 1.5 0 .48-.313.73-.75.75-1.313M7 11.5c.938.02 1.656.438 2.156 1.25.459.833.459 1.667 0 2.5-.5.813-1.219 1.23-2.156 1.25-.937-.02-1.656-.437-2.156-1.25-.459-.833-.459-1.667 0-2.5.5-.812 1.218-1.23 2.156-1.25'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFloppyDiskRegularIcon);
export default ForwardRef;
