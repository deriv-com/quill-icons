import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpToLineSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.688 4.625h9.625q.41.027.437.438-.027.41-.437.437H.688Q.277 5.473.25 5.063q.027-.411.438-.438M5.8 7.387l3.5 3.5q.273.3 0 .601-.3.274-.602 0L5.938 8.754v7.684q-.029.41-.438.437-.41-.027-.437-.437V8.754L2.3 11.488q-.3.274-.602 0-.273-.3 0-.601l3.5-3.5q.3-.274.602 0' />
    </g>
    <defs>
      <clipPath id='eb49fbdcf68342eac8b745a6ac692a54__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpToLineSmRegularIcon);
export default ForwardRef;
