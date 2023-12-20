import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedExclamationLgRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 3 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2.125 7.375V19.25c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625V7.375c.026-.39.234-.599.625-.625.39.026.599.234.625.625M1.5 23.938C.927 23.885.615 23.573.563 23c.052-.573.364-.885.937-.937.573.052.885.364.938.937-.053.573-.365.885-.938.938'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h3v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExclamationLgRegularIcon);
export default ForwardRef;
