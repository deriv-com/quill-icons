import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedExpandMdBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d='M4.25 5c.458.042.708.292.75.75-.042.458-.292.708-.75.75H1.5v2.75c-.042.458-.292.708-.75.75-.458-.042-.708-.292-.75-.75v-3.5c.042-.458.292-.708.75-.75h3.5ZM0 14.75c.042-.458.292-.708.75-.75.458.042.708.292.75.75v2.75h2.75c.458.042.708.292.75.75-.042.458-.292.708-.75.75H.75c-.458-.042-.708-.292-.75-.75v-3.5ZM13.25 5c.458.042.708.292.75.75v3.5c-.042.458-.292.708-.75.75-.458-.042-.708-.292-.75-.75V6.5H9.75c-.458-.042-.708-.292-.75-.75.042-.458.292-.708.75-.75h3.5Zm-.75 9.75c.042-.458.292-.708.75-.75.458.042.708.292.75.75v3.5c-.042.458-.292.708-.75.75h-3.5c-.458-.042-.708-.292-.75-.75.042-.458.292-.708.75-.75h2.75v-2.75Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExpandMdBoldIcon);
export default ForwardRef;
