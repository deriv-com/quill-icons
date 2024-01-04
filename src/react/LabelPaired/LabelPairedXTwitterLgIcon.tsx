import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedXTwitterLgIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M15.195 7.375h2.774l-6.016 6.875 7.07 9.375h-5.546L9.14 17.961 4.18 23.625H1.406l6.446-7.344-6.797-8.906h5.664l3.945 5.195 4.531-5.195Zm-.976 14.61h1.562L5.898 8.937h-1.64l9.96 13.046Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedXTwitterLgIcon);
export default ForwardRef;
