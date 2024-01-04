import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedBackwardMdFillIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M14.375 17.781 9 13.313v-2.626l5.375-4.468c.313-.25.667-.292 1.063-.125.354.187.541.49.562.906v10c-.02.417-.208.719-.563.906-.395.167-.75.125-1.062-.125ZM8 15v2c-.02.417-.208.719-.563.906-.395.167-.75.125-1.062-.125l-6-5A.976.976 0 0 1 0 12c0-.313.125-.573.375-.781l6-5c.313-.25.667-.292 1.063-.125.354.187.541.49.562.906v8Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardMdFillIcon);
export default ForwardRef;
