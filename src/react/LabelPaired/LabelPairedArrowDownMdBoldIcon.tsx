import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowDownMdBoldIcon = (
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
        d='m5.469 18.781-5.25-5.5c-.292-.375-.281-.729.031-1.062.354-.292.698-.292 1.031 0l3.969 4.156V5.75c.042-.458.292-.708.75-.75.458.042.708.292.75.75v10.625l3.969-4.125c.333-.313.687-.323 1.062-.031.292.333.292.687 0 1.062l-5.25 5.5A.723.723 0 0 1 6 19a.723.723 0 0 1-.531-.219Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownMdBoldIcon);
export default ForwardRef;
