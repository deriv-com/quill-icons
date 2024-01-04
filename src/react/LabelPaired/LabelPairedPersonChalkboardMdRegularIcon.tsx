import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedPersonChalkboardMdRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M5.25 5.75c.042.458.292.708.75.75.458-.042.708-.292.75-.75-.042-.458-.292-.708-.75-.75-.458.042-.708.292-.75.75Zm2.5 0c-.02.667-.313 1.167-.875 1.5-.583.333-1.167.333-1.75 0-.563-.333-.854-.833-.875-1.5.02-.667.313-1.167.875-1.5.583-.333 1.167-.333 1.75 0 .563.333.854.833.875 1.5ZM5.594 9c-.209 0-.407.042-.594.125V14h2V9H5.594ZM5 19.5c-.02.313-.188.48-.5.5-.313-.02-.48-.188-.5-.5v-9.188L2.437 13.25c-.166.25-.385.313-.656.188-.27-.167-.343-.386-.218-.657l1.843-3.469C3.886 8.48 4.615 8.043 5.594 8H10V5.5c.02-.417.167-.77.438-1.063A1.63 1.63 0 0 1 11.5 4h7c.417.02.77.167 1.063.438.27.291.416.645.437 1.062v7a1.63 1.63 0 0 1-.438 1.063A1.63 1.63 0 0 1 18.5 14h-7a1.63 1.63 0 0 1-1.063-.438A1.63 1.63 0 0 1 10 12.5V10h1v2.5c.02.313.188.48.5.5h7c.313-.02.48-.188.5-.5v-7c-.02-.313-.188-.48-.5-.5h-7c-.313.02-.48.188-.5.5V8h1.5c.313.02.48.188.5.5-.02.313-.188.48-.5.5H8v10.5c-.02.313-.188.48-.5.5-.313-.02-.48-.188-.5-.5V15H5v4.5Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPersonChalkboardMdRegularIcon);
export default ForwardRef;
