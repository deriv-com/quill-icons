import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedXTwitterSmIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M10.637 5.063h1.941l-4.21 4.812 4.948 6.563H9.434l-3.036-3.965-3.472 3.964H.984l4.512-5.14L.738 5.062h3.965L7.465 8.7l3.172-3.636Zm-.684 10.226h1.094L4.129 6.156H2.98l6.973 9.133Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedXTwitterSmIcon);
export default ForwardRef;
