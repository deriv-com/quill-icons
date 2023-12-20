import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedBackwardXlFillIcon = (
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
        d='M21.563 26.672 13.5 19.969V16.03l8.063-6.703c.468-.375 1-.437 1.593-.187.532.28.813.734.844 1.359v15c-.031.625-.312 1.078-.844 1.36-.593.25-1.125.187-1.593-.188M12 22.5v3c-.031.625-.312 1.078-.844 1.36-.594.25-1.125.187-1.594-.188l-9-7.5C.188 18.859 0 18.469 0 18s.188-.86.563-1.172l9-7.5c.468-.375 1-.437 1.593-.187.531.28.813.734.844 1.359V18z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardXlFillIcon);
export default ForwardRef;
