import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedExclamationXlRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={3}
    height={36}
    viewBox='0 0 3 36'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2.25 8.25V22.5c-.031.469-.281.719-.75.75-.469-.031-.719-.281-.75-.75V8.25c.031-.469.281-.719.75-.75.469.031.719.281.75.75ZM1.5 28.125C.812 28.062.437 27.687.375 27c.063-.688.438-1.063 1.125-1.125.688.063 1.063.438 1.125 1.125-.063.688-.438 1.063-1.125 1.125Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h3v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExclamationXlRegularIcon);
export default ForwardRef;
