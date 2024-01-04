import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedHorizontalRuleDashedMdBoldIcon = (
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
        d='M0 12a.74.74 0 0 1 .75-.75h2a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75h-2A.722.722 0 0 1 0 12Zm5.5 0a.74.74 0 0 1 .75-.75h2A.76.76 0 0 1 9 12a.74.74 0 0 1-.75.75h-2A.722.722 0 0 1 5.5 12Zm5.5 0a.74.74 0 0 1 .75-.75h2a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75h-2A.722.722 0 0 1 11 12Zm5.5 0a.74.74 0 0 1 .75-.75h2A.76.76 0 0 1 20 12a.74.74 0 0 1-.75.75h-2a.722.722 0 0 1-.75-.75Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHorizontalRuleDashedMdBoldIcon);
export default ForwardRef;
