import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedPlusLgRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 18 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M9.625 8v6.875H16.5c.39.026.599.234.625.625-.026.39-.234.599-.625.625H9.625V23c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625v-6.875H1.5c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625h6.875V8c.026-.39.234-.599.625-.625.39.026.599.234.625.625'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlusLgRegularIcon);
export default ForwardRef;
