import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTakeProfitLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.79 12.297v8.437H6.483v-8.437H3.672v-2.031h7.93v2.03zm4.374 8.437V10.266h4.961c.469 0 .938.117 1.328.273s.703.39.977.664c.273.313.508.664.664 1.094a4.74 4.74 0 0 1 0 2.695 2.9 2.9 0 0 1-.664 1.055 3.7 3.7 0 0 1-.977.703c-.39.156-.82.234-1.328.234h-2.656v3.75zm2.305-5.742h2.383c.351 0 .625-.078.78-.273.235-.156.313-.43.313-.781v-.626c0-.351-.078-.624-.312-.78-.156-.196-.43-.274-.781-.274h-2.383z' />
    </g>
    <defs>
      <clipPath id='6c18aad583cabd40e4868847da8a8fdd__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTakeProfitLgBoldIcon);
export default ForwardRef;
