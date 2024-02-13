import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSearchCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9 8.375q0-1.125-.562-2.062a4.06 4.06 0 0 0-1.5-1.5 4.1 4.1 0 0 0-2.063-.563q-1.078 0-2.062.563-.961.563-1.5 1.5A3.93 3.93 0 0 0 .75 8.375q0 1.125.563 2.063.539.936 1.5 1.5a4.1 4.1 0 0 0 2.062.562q1.078 0 2.063-.562a4.06 4.06 0 0 0 1.5-1.5A3.93 3.93 0 0 0 9 8.375m-.96 3.703q-1.313 1.125-3.165 1.172-2.062-.047-3.445-1.43T0 8.375Q.047 6.313 1.43 4.93T4.875 3.5q2.062.047 3.445 1.43t1.43 3.445q-.047 1.852-1.172 3.164l3.305 3.328q.234.258 0 .516-.258.234-.516 0z' />
    </g>
    <defs>
      <clipPath id='9f950336a1cca5242fd86dff61f621ed__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSearchCaptionRegularIcon);
export default ForwardRef;
