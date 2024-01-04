import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowUpLgRegularIcon = (
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
        d='m7.93 6.945 6.875 6.875c.26.287.26.573 0 .86-.287.26-.573.26-.86 0l-5.82-5.782v14.727c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625V8.898l-5.82 5.782c-.287.26-.573.26-.86 0-.26-.287-.26-.573 0-.86L7.07 6.945c.287-.26.573-.26.86 0Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpLgRegularIcon);
export default ForwardRef;
