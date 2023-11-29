import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedWifiBoldIcon = (
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
        d='M1.25 9.813c-.375.27-.73.25-1.063-.063-.27-.375-.25-.73.063-1.063A14.718 14.718 0 0 1 4.688 5.97C6.354 5.323 8.124 5 10 5c1.875 0 3.646.323 5.313.969a14.718 14.718 0 0 1 4.437 2.718c.313.334.333.688.063 1.063-.334.313-.688.333-1.063.063a13.054 13.054 0 0 0-4-2.438C13.27 6.792 11.687 6.5 10 6.5c-1.688 0-3.27.292-4.75.875a13.053 13.053 0 0 0-4 2.438ZM10 12c-2.063.042-3.813.719-5.25 2.031-.354.292-.708.281-1.063-.031-.27-.375-.25-.73.063-1.063a8.979 8.979 0 0 1 2.844-1.78A8.86 8.86 0 0 1 10 10.5c1.208 0 2.344.219 3.406.656a8.977 8.977 0 0 1 2.844 1.781c.313.334.333.688.063 1.063-.355.313-.709.323-1.063.031C13.812 12.72 12.062 12.041 10 12Zm1.75 5.25c-.02.667-.313 1.167-.875 1.5-.583.333-1.167.333-1.75 0-.563-.333-.854-.833-.875-1.5.02-.667.313-1.167.875-1.5.583-.333 1.167-.333 1.75 0 .563.333.854.833.875 1.5Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWifiBoldIcon);
export default ForwardRef;