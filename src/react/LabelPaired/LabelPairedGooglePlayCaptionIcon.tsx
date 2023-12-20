import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedGooglePlayCaptionIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 12 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m7.617 8.984 1.406-1.406-6.562-3.773zM1.102 3.5l6.023 6-6.023 6a.91.91 0 0 1-.516-.82V4.32a.91.91 0 0 1 .516-.82m9.96 5.297a.825.825 0 0 1 .352.703c0 .297-.11.531-.328.703l-1.406.82L8.156 9.5 9.68 8zm-8.601 6.398 5.156-5.18 1.406 1.407z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGooglePlayCaptionIcon);
export default ForwardRef;
