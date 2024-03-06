import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedOneXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={36}
    viewBox='0 0 12 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.125 8.625V26.25h3.75q1.032.094 1.125 1.125-.093 1.032-1.125 1.125h-9.75Q.095 28.407 0 27.375q.095-1.03 1.125-1.125h3.75V10.64l-3.187 1.922q-.891.47-1.547-.328-.423-.937.375-1.546l4.875-3q.562-.33 1.172-.047.562.328.562.984' />
    </g>
    <defs>
      <clipPath id='1292659a88d7f1eda6d1b5dac93ea7b6__a'>
        <path d='M0 0h12v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedOneXlBoldIcon);
export default ForwardRef;
