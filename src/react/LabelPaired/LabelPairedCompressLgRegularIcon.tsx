import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCompressLgRegularIcon = (
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
        d='M6.5 7.375v5c-.026.39-.234.599-.625.625h-5c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625H5.25V7.375c.026-.39.234-.599.625-.625.39.026.599.234.625.625ZM.875 18h5c.39.026.599.234.625.625v5c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625V19.25H.875c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625ZM12.75 7.375v4.375h4.375c.39.026.599.234.625.625-.026.39-.234.599-.625.625h-5c-.39-.026-.599-.234-.625-.625v-5c.026-.39.234-.599.625-.625.39.026.599.234.625.625ZM12.125 18h5c.39.026.599.234.625.625-.026.39-.234.599-.625.625H12.75v4.375c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625v-5c.026-.39.234-.599.625-.625Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCompressLgRegularIcon);
export default ForwardRef;
