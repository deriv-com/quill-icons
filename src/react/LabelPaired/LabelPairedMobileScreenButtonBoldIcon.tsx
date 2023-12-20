import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedMobileScreenButtonBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 12 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2 18c.02.313.188.48.5.5h7c.313-.02.48-.187.5-.5v-2.5H2zm0-4h8V6c-.02-.312-.187-.48-.5-.5h-7c-.312.02-.48.188-.5.5zM.5 6c.02-.562.219-1.031.594-1.406S1.937 4.02 2.5 4h7c.563.02 1.031.219 1.406.594s.573.843.594 1.406v12c-.02.563-.219 1.031-.594 1.406s-.844.573-1.406.594h-7c-.562-.02-1.031-.219-1.406-.594S.52 18.563.5 18zM5 16.5h2c.313.02.48.188.5.5-.02.313-.187.48-.5.5H5c-.312-.02-.48-.187-.5-.5.02-.312.188-.48.5-.5'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileScreenButtonBoldIcon);
export default ForwardRef;
