import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedVideoMdBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={24}
    viewBox='0 0 18 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2 7.5c-.313.02-.48.188-.5.5v8c.02.313.188.48.5.5h8c.313-.02.48-.188.5-.5V8c-.02-.313-.188-.48-.5-.5H2ZM0 8c.02-.563.219-1.031.594-1.406S1.438 6.02 2 6h8c.563.02 1.031.219 1.406.594S11.98 7.437 12 8V16c-.02.563-.219 1.031-.594 1.406S10.562 17.98 10 18H2c-.563-.02-1.031-.219-1.406-.594S.02 16.563 0 16V8Zm16.5 7.344V8.656L13 10.22V8.563l3.25-1.438c.167-.083.344-.125.531-.125a1.1 1.1 0 0 1 .844.375c.25.23.375.52.375.875v7.531a1.1 1.1 0 0 1-.375.844 1.1 1.1 0 0 1-.844.375c-.187 0-.364-.031-.531-.094L13 15.438V13.78l3.5 1.563Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedVideoMdBoldIcon);
export default ForwardRef;
