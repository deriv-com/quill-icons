import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedExpandLgRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M5.875 6.75c.39.026.599.234.625.625-.026.39-.234.599-.625.625H1.5v4.375c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625v-5c.026-.39.234-.599.625-.625h5ZM.25 18.625c.026-.39.234-.599.625-.625.39.026.599.234.625.625V23h4.375c.39.026.599.234.625.625-.026.39-.234.599-.625.625h-5c-.39-.026-.599-.234-.625-.625v-5ZM17.125 6.75c.39.026.599.234.625.625v5c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625V8h-4.375c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625h5ZM16.5 18.625c.026-.39.234-.599.625-.625.39.026.599.234.625.625v5c-.026.39-.234.599-.625.625h-5c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625H16.5v-4.375Z'
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
