import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleArrowUpRightSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 10.75a6.95 6.95 0 0 1 3.5-6.043c2.16-1.258 4.813-1.258 7 0C12.66 5.965 14 8.262 14 10.75a7.02 7.02 0 0 1-3.5 6.07c-2.187 1.258-4.84 1.258-7 0A6.96 6.96 0 0 1 0 10.75m10.063 1.75V8.344c0-.356-.301-.656-.657-.656H5.031c-.383 0-.656.3-.656.656 0 .383.273.656.656.656l2.79.027-3.692 3.692a.6.6 0 0 0 0 .902c.246.274.656.274.93 0L8.75 9.93v2.57c0 .383.273.656.656.656a.65.65 0 0 0 .656-.656' />
    </g>
    <defs>
      <clipPath id='1337b7a7f647c65ed45a742883f2d9d2__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleArrowUpRightSmFillIcon);
export default ForwardRef;
