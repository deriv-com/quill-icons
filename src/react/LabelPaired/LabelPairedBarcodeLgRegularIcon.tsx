import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedBarcodeLgRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M0 7.375c.026-.39.234-.599.625-.625.39.026.599.234.625.625v16.25c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625zm2.5 0c.026-.39.234-.599.625-.625.39.026.599.234.625.625v16.25c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625zm3.125-.625c.39.026.599.234.625.625v16.25c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625V7.375c.026-.39.234-.599.625-.625m3.125.625c.026-.39.234-.599.625-.625.39.026.599.234.625.625v16.25c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625zm3.125-.625c.39.026.599.234.625.625v16.25c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625V7.375c.026-.39.234-.599.625-.625M15 7.375c.026-.39.234-.599.625-.625.39.026.599.234.625.625v16.25c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625zm4.375-.625c.39.026.599.234.625.625v16.25c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625V7.375c.026-.39.234-.599.625-.625'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarcodeLgRegularIcon);
export default ForwardRef;
