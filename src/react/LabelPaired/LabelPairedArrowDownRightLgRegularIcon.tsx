import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowDownRightLgRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M13.125 21.75h-8.75c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625h7.227L1.445 10.305c-.26-.287-.26-.573 0-.86.287-.26.573-.26.86 0L12.5 19.602v-7.227c.026-.39.234-.599.625-.625.39.026.599.234.625.625v8.75c-.026.39-.234.599-.625.625Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownRightLgRegularIcon);
export default ForwardRef;
