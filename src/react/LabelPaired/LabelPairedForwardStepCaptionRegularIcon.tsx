import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedForwardStepCaptionRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={18}
    viewBox='0 0 8 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M6.25 5.375c.016-.234.14-.36.375-.375.234.016.36.14.375.375v8.25c-.016.234-.14.36-.375.375-.234-.016-.36-.14-.375-.375v-3.188L2.055 13.86a.592.592 0 0 1-.399.141.636.636 0 0 1-.468-.188.636.636 0 0 1-.188-.468V5.656c0-.187.063-.343.188-.468A.636.636 0 0 1 1.655 5c.157 0 .29.047.399.14L6.25 8.564V5.374Zm-4.5.492v7.266L6.227 9.5 1.75 5.867Z'
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
