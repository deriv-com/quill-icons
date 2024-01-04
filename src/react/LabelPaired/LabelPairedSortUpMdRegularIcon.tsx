import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedSortUpMdRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={24}
    viewBox='0 0 10 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m4.813 6.063-3.75 3.562A.212.212 0 0 0 1 9.781c.02.125.094.198.219.219H8.78A.244.244 0 0 0 9 9.781a.212.212 0 0 0-.063-.156l-3.75-3.563A.336.336 0 0 0 5 6a.336.336 0 0 0-.188.063Zm-.688-.72C4.375 5.116 4.667 5 5 5c.333 0 .625.115.875.344l3.75 3.531c.25.25.375.552.375.906s-.115.646-.344.875c-.229.23-.52.344-.875.344H1.22c-.354 0-.646-.115-.875-.344-.23-.229-.344-.52-.344-.875 0-.354.125-.656.375-.906l3.75-3.531Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortUpMdRegularIcon);
export default ForwardRef;
