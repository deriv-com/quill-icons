import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const CurrencyDaiIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <path
      fill='#FCE6C5'
      d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16Z'
    />
    <path fill='#FFCC80' d='M6 16h10v10L6 16Z' />
    <path fill='#FFB74D' d='M16 6v13L6 16 16 6Z' />
    <path fill='#fff' d='m9 16 7-7v4l-3 3H9Z' />
    <path fill='#F7C57B' d='M26 16H16v10l10-10Z' />
    <path fill='#F7B14A' d='M16 6v13l10-3L16 6Z' />
    <path fill='#fff' d='m23 16-7-7v4l3 3h4Z' />
  </svg>
);
const ForwardRef = forwardRef(CurrencyDaiIcon);
export default ForwardRef;
