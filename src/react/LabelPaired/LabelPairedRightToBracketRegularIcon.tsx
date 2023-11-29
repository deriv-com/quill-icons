import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedRightToBracketRegularIcon = (
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
        d='M9.969 12.063c.02-.021.031-.042.031-.063 0-.02-.01-.042-.031-.063L5.844 8.063C5.802 8.02 5.76 8 5.719 8a.244.244 0 0 0-.219.219V10c-.02.313-.188.48-.5.5H1.25c-.146.02-.23.104-.25.25v2.5c.02.146.104.23.25.25H5c.313.02.48.188.5.5v1.781c.02.125.094.198.219.219.041 0 .083-.02.125-.063l4.125-3.874ZM11 12c0 .313-.115.573-.344.781l-4.125 3.906c-.229.209-.5.313-.812.313-.354 0-.646-.115-.875-.344-.23-.229-.344-.52-.344-.875V14.5H1.25c-.354 0-.646-.125-.875-.375-.25-.23-.375-.52-.375-.875v-2.5c0-.354.125-.646.375-.875.23-.25.52-.375.875-.375H4.5V8.219c0-.354.115-.646.344-.875.229-.23.52-.344.875-.344.312 0 .583.115.812.344l4.125 3.875c.23.208.344.469.344.781Zm-.5 6h3a1.63 1.63 0 0 0 1.063-.438A1.63 1.63 0 0 0 15 16.5v-9a1.63 1.63 0 0 0-.438-1.063A1.63 1.63 0 0 0 13.5 6h-3c-.313-.02-.48-.188-.5-.5.02-.313.188-.48.5-.5h3c.708.02 1.302.26 1.781.719.459.479.698 1.073.719 1.781v9c-.02.708-.26 1.302-.719 1.781-.479.459-1.073.698-1.781.719h-3c-.313-.02-.48-.188-.5-.5.02-.313.188-.48.5-.5Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRightToBracketRegularIcon);
export default ForwardRef;