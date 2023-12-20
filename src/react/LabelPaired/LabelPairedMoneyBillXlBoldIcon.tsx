import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedMoneyBillXlBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 27 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M5.25 11.25c-.031.844-.328 1.547-.89 2.11-.563.562-1.266.859-2.11.89v7.5c.844.031 1.547.328 2.11.89.562.563.859 1.266.89 2.11h16.5c.031-.844.328-1.547.89-2.11.563-.562 1.266-.859 2.11-.89v-7.5c-.844-.031-1.547-.328-2.11-.89-.562-.563-.859-1.266-.89-2.11zM0 12c.031-.844.328-1.547.89-2.11C1.454 9.329 2.157 9.032 3 9h21c.844.031 1.547.328 2.11.89.562.563.859 1.266.89 2.11v12c-.031.844-.328 1.547-.89 2.11-.563.562-1.266.859-2.11.89H3c-.844-.031-1.547-.328-2.11-.89C.329 25.546.032 24.843 0 24zm13.5 1.5c.813 0 1.563.203 2.25.61A4.51 4.51 0 0 1 18 18a4.51 4.51 0 0 1-2.25 3.89 4.343 4.343 0 0 1-2.25.61 4.343 4.343 0 0 1-2.25-.61A4.51 4.51 0 0 1 9 18a4.51 4.51 0 0 1 2.25-3.89 4.343 4.343 0 0 1 2.25-.61'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMoneyBillXlBoldIcon);
export default ForwardRef;
