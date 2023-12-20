import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedImagePolaroidUserBoldIcon = (
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
        d='M1.5 17c.02.313.188.48.5.5h10c.313-.02.48-.187.5-.5v-1.5h-11zm8.938-3H12.5V7c-.02-.312-.187-.48-.5-.5H2c-.312.02-.48.188-.5.5v7h2.063a2.06 2.06 0 0 1 .687-1.062c.354-.292.77-.438 1.25-.438h3c.48 0 .896.146 1.25.438.333.27.563.624.688 1.062M14 7v10c-.02.563-.219 1.031-.594 1.406S12.562 18.98 12 19H2c-.562-.02-1.031-.219-1.406-.594S.02 17.563 0 17V7c.02-.562.219-1.031.594-1.406S1.438 5.02 2 5h10c.563.02 1.031.219 1.406.594S13.98 6.437 14 7M5 9.5c.02-.75.354-1.323 1-1.719.667-.375 1.333-.375 2 0 .646.396.98.969 1 1.719-.02.75-.354 1.323-1 1.719-.667.375-1.333.375-2 0-.646-.396-.98-.969-1-1.719'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedImagePolaroidUserBoldIcon);
export default ForwardRef;
