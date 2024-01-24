import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedWindowsMdIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M0 6.938v4.75h5.75V6.125zm0 10.125v-4.688h5.75v5.5zm6.375.875v-5.563H14V19zm0-11.875L14 5v6.688H6.375z' />
    </g>
    <defs>
      <clipPath id='f02c00d2029e379d52ea13a49c2bd77a__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWindowsMdIcon);
export default ForwardRef;
