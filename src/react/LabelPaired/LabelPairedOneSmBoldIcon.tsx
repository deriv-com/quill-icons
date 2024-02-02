import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedOneSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={7}
    height={22}
    viewBox='0 0 7 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.156 5.281v10.282h2.188q.601.054.656.656-.054.601-.656.656H.656Q.055 16.82 0 16.219q.054-.602.656-.657h2.188V6.458L.984 7.578q-.52.274-.902-.191-.246-.548.219-.903l2.844-1.75a.7.7 0 0 1 .683-.027.62.62 0 0 1 .328.574' />
    </g>
    <defs>
      <clipPath id='3e8ebad36c3ffdde__a'>
        <path d='M0 0h7v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedOneSmBoldIcon);
export default ForwardRef;
