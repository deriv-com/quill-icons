import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedExpandLgRegularIcon = (
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
        d='M5.875 6.75c.39.026.599.234.625.625-.026.39-.234.599-.625.625H1.5v4.375c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625v-5c.026-.39.234-.599.625-.625zM.25 18.625c.026-.39.234-.599.625-.625.39.026.599.234.625.625V23h4.375c.39.026.599.234.625.625-.026.39-.234.599-.625.625h-5c-.39-.026-.599-.234-.625-.625zM17.125 6.75c.39.026.599.234.625.625v5c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625V8h-4.375c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625zM16.5 18.625c.026-.39.234-.599.625-.625.39.026.599.234.625.625v5c-.026.39-.234.599-.625.625h-5c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625H16.5z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExpandLgRegularIcon);
export default ForwardRef;
