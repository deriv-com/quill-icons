import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCaretDownSmRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 9 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m4.664 13.32 3.281-3.117A.185.185 0 0 0 8 10.066a.214.214 0 0 0-.191-.191H1.19a.214.214 0 0 0-.191.191c0 .055.018.1.055.137l3.28 3.117c.056.037.11.055.165.055.055 0 .11-.018.164-.055m.602.63c-.22.2-.474.3-.766.3-.292 0-.547-.1-.766-.3l-3.28-3.09a1.08 1.08 0 0 1-.329-.794c0-.31.1-.565.3-.765C.627 9.1.883 9 1.192 9H7.81c.31.018.565.128.765.328.2.2.301.447.301.738 0 .31-.11.575-.328.793z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCaretDownSmRegularIcon);
export default ForwardRef;
