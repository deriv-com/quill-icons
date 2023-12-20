import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedMicrophoneRegularIcon = (
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
        d='M8 7c-.02-.562-.219-1.031-.594-1.406S6.563 5.02 6 5c-.562.02-1.031.219-1.406.594S4.02 6.437 4 7v5c.02.563.219 1.031.594 1.406S5.437 13.98 6 14c.563-.02 1.031-.219 1.406-.594S7.98 12.562 8 12zM3 7c.02-.854.313-1.562.875-2.125C4.438 4.313 5.145 4.021 6 4c.854.02 1.563.313 2.125.875.563.563.854 1.27.875 2.125v5c-.02.854-.312 1.563-.875 2.125-.562.563-1.27.854-2.125.875-.854-.02-1.562-.312-2.125-.875-.562-.562-.854-1.27-.875-2.125zm-1 3.5V12c.02 1.125.406 2.073 1.156 2.844.771.75 1.719 1.135 2.844 1.156 1.125-.02 2.073-.406 2.844-1.156.75-.771 1.135-1.719 1.156-2.844v-1.5c.02-.312.188-.48.5-.5.313.02.48.188.5.5V12c-.02 1.333-.458 2.458-1.312 3.375-.834.917-1.896 1.448-3.188 1.594V19h2c.313.02.48.188.5.5-.02.313-.187.48-.5.5h-5c-.312-.02-.48-.187-.5-.5.02-.312.188-.48.5-.5h2v-2.031c-1.292-.146-2.354-.677-3.187-1.594C1.458 14.458 1.02 13.333 1 12v-1.5c.02-.312.188-.48.5-.5.313.02.48.188.5.5'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMicrophoneRegularIcon);
export default ForwardRef;
