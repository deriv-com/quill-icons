import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMoonMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.938 6.094A6.006 6.006 0 0 0 1 12c0 3.344 2.656 6 5.969 6a6.2 6.2 0 0 0 2.937-.75c-3.312-.281-5.937-3.094-5.937-6.5 0-1.812.75-3.469 1.969-4.656M8 5.437a.45.45 0 0 1-.219.532A5.488 5.488 0 0 0 10.47 16.25c.312 0 .625 0 .937-.062.219-.032.438.062.531.25.094.218.063.437-.093.593A6.95 6.95 0 0 1 6.969 19C3.125 19 0 15.875 0 12c0-3.844 3.125-7 6.969-7 .187 0 .406.031.593.031.22.032.407.188.438.407' />
    </g>
    <defs>
      <clipPath id='d3794c92ebd7dd90155d43f52b5c0f8c__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMoonMdRegularIcon);
export default ForwardRef;
