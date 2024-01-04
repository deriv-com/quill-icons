import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedDerivMdIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M13.25 4.531 16.375 4l-2.188 12.5C13.845 18.438 12 20 10.032 20H7.656c-2.687 0-4.468-2.156-4-4.813l.219-1.156c.469-2.656 3-4.844 5.688-4.844h2.843l.844-4.656Zm-2.031 11.532.687-4h-2.5c-1.219 0-2.344 1-2.562 2.187l-.125.719c-.219 1.187.593 2.156 1.781 2.156h1.469c.594 0 1.125-.469 1.25-1.063Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDerivMdIcon);
export default ForwardRef;
