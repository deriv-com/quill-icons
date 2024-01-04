import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowUpFromBracketMdBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m7.531 4.219 4 4c.292.354.292.708 0 1.062-.354.292-.708.292-1.062 0L7.75 6.562v7.688c-.042.458-.292.708-.75.75-.458-.042-.708-.292-.75-.75V6.562l-2.719 2.72c-.354.29-.708.29-1.062 0-.292-.355-.292-.71 0-1.063l4-4c.354-.292.708-.292 1.062 0ZM1.5 14.75v2.5c0 .354.125.646.375.875.23.25.52.375.875.375h8.5c.354 0 .646-.125.875-.375.25-.23.375-.52.375-.875v-2.5c.042-.458.292-.708.75-.75.458.042.708.292.75.75v2.5c-.02.77-.292 1.417-.813 1.938-.52.52-1.166.791-1.937.812h-8.5c-.77-.02-1.417-.292-1.938-.813-.52-.52-.791-1.166-.812-1.937v-2.5c.042-.458.292-.708.75-.75.458.042.708.292.75.75Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpFromBracketMdBoldIcon);
export default ForwardRef;
