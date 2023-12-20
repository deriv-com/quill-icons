import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedForwardStepLgRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 13 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M10.25 8.625c.026-.39.234-.599.625-.625.39.026.599.234.625.625v13.75c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625v-5.312l-6.992 5.703a.985.985 0 0 1-.664.234 1.06 1.06 0 0 1-.781-.312 1.06 1.06 0 0 1-.313-.782V9.094c0-.313.104-.573.313-.781A1.06 1.06 0 0 1 2.593 8c.261 0 .483.078.665.234l6.992 5.704zm-7.5.82v12.11l7.46-6.055z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardStepLgRegularIcon);
export default ForwardRef;
