import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedForwardStepCaptionRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 8 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M6.25 5.375c.016-.234.14-.36.375-.375.234.016.36.14.375.375v8.25c-.016.234-.14.36-.375.375-.234-.016-.36-.14-.375-.375v-3.187l-4.195 3.421a.592.592 0 0 1-.399.141.636.636 0 0 1-.468-.187.636.636 0 0 1-.188-.47V5.657c0-.187.063-.343.188-.468A.636.636 0 0 1 1.656 5c.157 0 .29.047.399.14L6.25 8.564zm-4.5.492v7.266L6.227 9.5z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardStepCaptionRegularIcon);
export default ForwardRef;
