import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedFileChartColumnMdBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.5 18c.02.313.188.48.5.5h8c.313-.02.48-.188.5-.5V9H8a.973.973 0 0 1-.719-.281A.973.973 0 0 1 7 8V5.5H2c-.313.02-.48.188-.5.5v12ZM2 4h5.188c.541 0 1.01.198 1.406.594l2.812 2.812c.396.396.594.875.594 1.438V18c-.02.563-.219 1.031-.594 1.406S10.562 19.98 10 20H2c-.563-.02-1.031-.219-1.406-.594S.02 18.563 0 18V6c.02-.563.219-1.031.594-1.406S1.438 4.02 2 4Zm4.75 8.75v4c-.042.458-.292.708-.75.75-.458-.042-.708-.292-.75-.75v-4c.042-.458.292-.708.75-.75.458.042.708.292.75.75Zm2.75 1v3c-.042.458-.292.708-.75.75-.458-.042-.708-.292-.75-.75v-3c.042-.458.292-.708.75-.75.458.042.708.292.75.75Zm-5.5 1v2c-.042.458-.292.708-.75.75-.458-.042-.708-.292-.75-.75v-2c.042-.458.292-.708.75-.75.458.042.708.292.75.75Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileChartColumnMdBoldIcon);
export default ForwardRef;
