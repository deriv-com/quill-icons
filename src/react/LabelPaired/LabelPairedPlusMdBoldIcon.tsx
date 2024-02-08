import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlusMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.75 6.25v5h5q.687.063.75.75-.063.687-.75.75h-5v5q-.063.687-.75.75-.687-.063-.75-.75v-5h-5Q.563 12.687.5 12q.063-.687.75-.75h5v-5q.063-.687.75-.75.687.063.75.75' />
    </g>
    <defs>
      <clipPath id='f4ecbf6667e46407604f2016b3818bc8__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlusMdBoldIcon);
export default ForwardRef;
