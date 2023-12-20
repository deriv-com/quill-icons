import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedForwardXlFillIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2.484 26.672c-.5.375-1.046.437-1.64.187C.313 26.58.03 26.125 0 25.5v-15c.031-.625.313-1.078.844-1.36.594-.25 1.14-.187 1.64.188l8.016 6.703v3.938zM12 22.5v-12c.031-.625.313-1.078.844-1.36.594-.25 1.14-.187 1.64.188l9 7.5c.344.313.516.703.516 1.172s-.172.86-.516 1.172l-9 7.5c-.5.375-1.046.437-1.64.187-.531-.28-.813-.734-.844-1.359z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardXlFillIcon);
export default ForwardRef;
