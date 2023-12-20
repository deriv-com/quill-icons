import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedBackwardStepCaptionRegularIcon = (
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
        d='M1.75 5.375v3.188L5.945 5.14A.591.591 0 0 1 6.344 5c.187 0 .343.063.468.188A.636.636 0 0 1 7 5.656v7.688a.636.636 0 0 1-.187.469.636.636 0 0 1-.47.187.592.592 0 0 1-.398-.14L1.75 10.437v3.187c-.016.234-.14.36-.375.375-.234-.016-.36-.14-.375-.375v-8.25c.016-.234.14-.36.375-.375.234.016.36.14.375.375m4.5.492L1.773 9.5l4.477 3.633z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardStepCaptionRegularIcon);
export default ForwardRef;
