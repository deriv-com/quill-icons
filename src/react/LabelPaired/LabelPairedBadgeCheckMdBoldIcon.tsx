import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedBadgeCheckMdBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M6.25 6.563c-.208.333-.5.447-.875.343-.73-.208-1.385-.041-1.969.5-.541.584-.708 1.24-.5 1.969.104.375-.01.667-.344.875-.666.375-1.02.958-1.062 1.75.042.792.396 1.375 1.063 1.75.333.208.447.5.343.875-.208.73-.041 1.385.5 1.969.584.541 1.24.708 1.969.5.375-.104.667.01.875.343.375.667.958 1.021 1.75 1.063.792-.042 1.375-.396 1.75-1.063.208-.333.5-.447.875-.343.73.187 1.385.02 1.969-.5.541-.584.708-1.24.5-1.969-.104-.375.02-.667.375-.875.646-.375.99-.958 1.031-1.75-.042-.792-.385-1.375-1.031-1.75-.354-.208-.48-.5-.375-.875.208-.73.041-1.385-.5-1.969-.584-.541-1.24-.708-1.969-.5-.375.104-.667-.01-.875-.343C9.375 5.896 8.792 5.542 8 5.5c-.792.042-1.375.396-1.75 1.063ZM8 4c1.167.042 2.083.49 2.75 1.344 1.083-.125 2.052.208 2.906 1 .792.854 1.125 1.823 1 2.906.854.667 1.302 1.583 1.344 2.75-.042 1.167-.49 2.083-1.344 2.75.125 1.083-.208 2.052-1 2.906-.854.792-1.823 1.125-2.906 1C10.083 19.51 9.167 19.958 8 20c-1.167-.042-2.083-.49-2.75-1.344-1.083.125-2.052-.208-2.906-1-.792-.854-1.125-1.823-1-2.906C.49 14.083.042 13.167 0 12c.042-1.167.49-2.083 1.344-2.75-.125-1.083.208-2.052 1-2.906.854-.792 1.823-1.125 2.906-1C5.917 4.49 6.833 4.042 8 4Zm3.531 6.531-4 4c-.354.292-.708.292-1.062 0l-2-2c-.292-.354-.292-.708 0-1.062.354-.292.708-.292 1.062 0L7 12.938l3.469-3.47c.354-.29.708-.29 1.062 0 .292.355.292.71 0 1.063Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBadgeCheckMdBoldIcon);
export default ForwardRef;
