import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedMoneyBillSmBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M3.188 6.813c-.019.492-.192.902-.52 1.23-.328.328-.738.501-1.23.52v4.374c.492.019.902.192 1.23.52.328.328.501.738.52 1.23h9.625c.018-.492.19-.902.519-1.23.328-.328.738-.501 1.23-.52V8.564c-.492-.019-.902-.192-1.23-.52-.328-.328-.501-.738-.52-1.23zM.124 7.25c.018-.492.191-.902.52-1.23.328-.329.738-.502 1.23-.52h12.25c.492.018.902.191 1.23.52.329.328.502.738.52 1.23v7c-.018.492-.191.902-.52 1.23-.328.329-.738.502-1.23.52H1.875c-.492-.018-.902-.191-1.23-.52-.329-.328-.502-.738-.52-1.23zM8 8.125c.474 0 .911.118 1.313.355a2.63 2.63 0 0 1 1.313 2.27 2.63 2.63 0 0 1-1.313 2.27A2.533 2.533 0 0 1 8 13.375c-.474 0-.911-.118-1.312-.355a2.631 2.631 0 0 1-1.312-2.27 2.63 2.63 0 0 1 1.311-2.27A2.534 2.534 0 0 1 8 8.125'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMoneyBillSmBoldIcon);
export default ForwardRef;
