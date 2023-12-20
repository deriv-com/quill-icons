import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedEuroSignLgRegularIcon = (
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
        d='M1.578 14.25H.875c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625h.977c.572-1.849 1.614-3.346 3.125-4.492 1.51-1.146 3.268-1.732 5.273-1.758h1.914c.39.026.599.234.625.625-.026.39-.234.599-.625.625H10.25c-1.667.026-3.125.495-4.375 1.406-1.25.912-2.148 2.11-2.695 3.594h7.695c.39.026.599.234.625.625-.026.39-.234.599-.625.625H2.867a6.769 6.769 0 0 0 0 2.5h8.008c.39.026.599.234.625.625-.026.39-.234.599-.625.625H3.18c.547 1.484 1.445 2.682 2.695 3.594 1.25.911 2.708 1.38 4.375 1.406h1.914c.39.026.599.234.625.625-.026.39-.234.599-.625.625H10.25c-2.005-.026-3.763-.612-5.273-1.758C3.467 21.346 2.424 19.85 1.852 18H.875c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625h.703a10.069 10.069 0 0 1 0-2.5'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEuroSignLgRegularIcon);
export default ForwardRef;
