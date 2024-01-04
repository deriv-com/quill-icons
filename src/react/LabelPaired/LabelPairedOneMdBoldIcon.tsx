import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedOneMdBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={24}
    viewBox='0 0 8 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M4.75 5.75V17.5h2.5c.458.042.708.292.75.75-.042.458-.292.708-.75.75H.75c-.458-.042-.708-.292-.75-.75.042-.458.292-.708.75-.75h2.5V7.094L1.125 8.375c-.396.208-.74.135-1.031-.219-.188-.416-.104-.76.25-1.031l3.25-2a.802.802 0 0 1 .781-.031c.25.146.375.364.375.656Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h8v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedOneMdBoldIcon);
export default ForwardRef;
