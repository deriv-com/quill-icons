import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedGoogleXlIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 23 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M22.938 18.281c-.063 3.375-1.094 6.094-3.094 8.157-2.032 2.062-4.75 3.125-8.157 3.187-2.156-.031-4.109-.562-5.859-1.594a11.605 11.605 0 0 1-4.172-4.172C.625 22.11.094 20.156.063 18c.03-2.156.562-4.11 1.593-5.86A11.606 11.606 0 0 1 5.828 7.97c1.75-1.032 3.703-1.563 5.86-1.594 3.156.063 5.75 1.078 7.78 3.047l-3.14 3.047c-1.469-1.313-3.11-1.906-4.922-1.781-1.812.093-3.406.78-4.781 2.062-1.344 1.313-2.062 3.063-2.156 5.25.062 2.094.765 3.828 2.11 5.203 1.374 1.375 3.077 2.094 5.109 2.156 1.53-.03 2.765-.343 3.703-.937.937-.594 1.64-1.266 2.109-2.016.438-.781.703-1.468.797-2.062h-6.61v-4.032H22.75c.125.563.188 1.22.188 1.97'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h23v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGoogleXlIcon);
export default ForwardRef;
