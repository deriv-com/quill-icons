import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedPersonChalkboardMdBoldIcon = (
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
        d='M6 7c-.563-.02-1-.27-1.313-.75-.25-.5-.25-1 0-1.5C5 4.27 5.438 4.02 6 4c.563.02 1 .27 1.313.75.25.5.25 1 0 1.5C7 6.73 6.563 6.98 6 7Zm-.438 2.5H5.5v4h1v-4h-.938ZM5.5 19.25c-.042.458-.292.708-.75.75-.458-.042-.708-.292-.75-.75V11l-1.344 2.375c-.27.375-.614.469-1.031.281-.375-.27-.469-.614-.281-1.031l1.843-3.219c.25-.437.584-.781 1-1.031.417-.25.875-.375 1.375-.375H10V5.5c.02-.417.167-.77.438-1.063A1.63 1.63 0 0 1 11.5 4h7c.417.02.77.167 1.063.438.27.291.416.645.437 1.062v7a1.63 1.63 0 0 1-.438 1.063A1.63 1.63 0 0 1 18.5 14h-7a1.63 1.63 0 0 1-1.063-.438A1.63 1.63 0 0 1 10 12.5V11h1.5v1.5h7v-7h-7V8h.75c.458.042.708.292.75.75-.042.458-.292.708-.75.75H8v9.75c-.042.458-.292.708-.75.75-.458-.042-.708-.292-.75-.75V15h-1v4.25Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPersonChalkboardMdBoldIcon);
export default ForwardRef;
