import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedForwardXlFillIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2.484 26.672c-.5.375-1.046.437-1.64.187C.313 26.58.03 26.125 0 25.5v-15c.031-.625.313-1.078.844-1.36.594-.25 1.14-.187 1.64.188l8.016 6.703v3.938l-8.016 6.703ZM12 22.5v-12c.031-.625.313-1.078.844-1.36.594-.25 1.14-.187 1.64.188l9 7.5c.344.313.516.703.516 1.172s-.172.86-.516 1.172l-9 7.5c-.5.375-1.046.437-1.64.187-.531-.28-.813-.734-.844-1.359v-3Z'
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
