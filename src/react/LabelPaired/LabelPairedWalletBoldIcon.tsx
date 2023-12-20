import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedWalletBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2.75 5h11.5c.458.042.708.292.75.75-.042.458-.292.708-.75.75H2.75c-.354 0-.646.125-.875.375-.25.23-.375.52-.375.875v8.5c0 .354.125.646.375.875.23.25.52.375.875.375h10.5c.354 0 .646-.125.875-.375.25-.23.375-.52.375-.875v-5.5c0-.354-.125-.646-.375-.875-.23-.25-.52-.375-.875-.375h-9.5c-.458-.042-.708-.292-.75-.75.042-.458.292-.708.75-.75h9.5c.77.02 1.417.292 1.938.813.52.52.791 1.166.812 1.937v5.5c-.02.77-.292 1.417-.812 1.938-.521.52-1.167.791-1.938.812H2.75c-.77-.02-1.417-.292-1.937-.812C.292 17.667.02 17.02 0 16.25v-8.5c.02-.77.292-1.417.813-1.937.52-.521 1.166-.792 1.937-.813M12 14.5a.974.974 0 0 1-.719-.281A.974.974 0 0 1 11 13.5c0-.292.094-.531.281-.719A.974.974 0 0 1 12 12.5c.292 0 .531.094.719.281A.974.974 0 0 1 13 13.5a.974.974 0 0 1-.281.719.974.974 0 0 1-.719.281'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWalletBoldIcon);
export default ForwardRef;
