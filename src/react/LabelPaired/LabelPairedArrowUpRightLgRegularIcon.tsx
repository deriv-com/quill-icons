import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowUpRightLgRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 15 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M13.125 9.25c.39.026.599.234.625.625v8.75c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625v-7.227L2.305 21.555c-.287.26-.573.26-.86 0-.26-.287-.26-.573 0-.86L11.602 10.5H4.375c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightLgRegularIcon);
export default ForwardRef;
