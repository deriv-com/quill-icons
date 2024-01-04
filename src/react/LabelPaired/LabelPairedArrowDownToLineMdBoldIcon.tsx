import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowDownToLineMdBoldIcon = (
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
        d='M11.25 19H.75c-.458-.042-.708-.292-.75-.75.042-.458.292-.708.75-.75h10.5c.458.042.708.292.75.75-.042.458-.292.708-.75.75Zm-5.781-4.25v.031l-4-4.25c-.292-.375-.282-.729.031-1.062.354-.292.708-.281 1.063.031l2.687 2.875V5.75c.042-.458.292-.708.75-.75.458.042.708.292.75.75v6.625L9.469 9.5c.333-.313.687-.323 1.062-.031.292.333.302.677.031 1.031l-4 4.25A.777.777 0 0 1 6 15a.68.68 0 0 1-.531-.25Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownToLineMdBoldIcon);
export default ForwardRef;
