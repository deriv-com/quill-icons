import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowUpLeftLgRegularIcon = (
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
        d='M1.875 9.25h8.75c.39.026.599.234.625.625-.026.39-.234.599-.625.625H3.398l10.157 10.195c.26.287.26.573 0 .86-.287.26-.573.26-.86 0L2.5 11.398v7.227c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625v-8.75c.026-.39.234-.599.625-.625'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpLeftLgRegularIcon);
export default ForwardRef;
