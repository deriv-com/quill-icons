import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedSquareCheckSmFillIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2.125 4.625h8.75c.492.018.902.191 1.23.52.329.328.502.738.52 1.23v8.75c-.018.492-.191.902-.52 1.23-.328.329-.738.502-1.23.52h-8.75c-.492-.018-.902-.191-1.23-.52-.329-.328-.502-.738-.52-1.23v-8.75c.018-.492.191-.902.52-1.23.328-.329.738-.502 1.23-.52Zm7.465 4.84c.255-.31.255-.62 0-.93-.31-.255-.62-.255-.93 0L5.625 11.57 4.34 10.285c-.31-.255-.62-.255-.93 0-.255.31-.255.62 0 .93l1.75 1.75c.31.255.62.255.93 0l3.5-3.5Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSquareCheckSmFillIcon);
export default ForwardRef;
