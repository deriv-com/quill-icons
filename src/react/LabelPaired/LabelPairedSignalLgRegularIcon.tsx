import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedSignalLgRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 25 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M23.125 6.125v18.75c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625V6.125c.026-.39.234-.599.625-.625.39.026.599.234.625.625M17.5 9.25c.39.026.599.234.625.625v15c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625v-15c.026-.39.234-.599.625-.625m-4.375 4.375v11.25c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625v-11.25c.026-.39.234-.599.625-.625.39.026.599.234.625.625M7.5 16.75c.39.026.599.234.625.625v7.5c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625v-7.5c.026-.39.234-.599.625-.625m-5 3.75c.39.026.599.234.625.625v3.75c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625v-3.75c.026-.39.234-.599.625-.625'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSignalLgRegularIcon);
export default ForwardRef;
